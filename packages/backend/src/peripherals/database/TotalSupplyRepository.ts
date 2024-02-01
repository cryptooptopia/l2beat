import { Logger } from '@l2beat/backend-tools'
import { AssetId, ChainId, UnixTime } from '@l2beat/shared-pure'
import { TotalSupplyRow } from 'knex/types/tables'

import { BaseRepository, CheckConvention } from './shared/BaseRepository'
import { Database } from './shared/Database'
import {
  deleteHourlyUntil,
  deleteSixHourlyUntil,
} from './shared/deleteArchivedRecords'

export interface TotalSupplyRecord {
  timestamp: UnixTime
  totalSupply: bigint
  assetId: AssetId
  chainId: ChainId
}

export class TotalSupplyRepository extends BaseRepository {
  constructor(database: Database, logger: Logger) {
    super(database, logger)
    this.autoWrap<CheckConvention<TotalSupplyRepository>>(this)
  }

  async getByTimestamp(
    chainId: ChainId,
    timestamp: UnixTime,
  ): Promise<TotalSupplyRecord[]> {
    const knex = await this.knex()
    const rows = await knex('total_supplies').where({
      unix_timestamp: timestamp.toDate(),
      chain_id: Number(chainId),
    })

    return rows.map(toRecord)
  }

  async addOrUpdateMany(totalSupplies: TotalSupplyRecord[]) {
    const rows = totalSupplies.map(toRow)
    const knex = await this.knex()
    await knex('total_supplies')
      .insert(rows)
      .onConflict(['chain_id', 'unix_timestamp', 'asset_id'])
      .merge()
    return rows.length
  }

  async addMany(totalSupplies: TotalSupplyRecord[]) {
    const rows = totalSupplies.map(toRow)
    const knex = await this.knex()
    await knex.batchInsert('total_supplies', rows, 10_000)
    return rows.length
  }

  async getAll(): Promise<TotalSupplyRecord[]> {
    const knex = await this.knex()
    const rows = await knex('total_supplies')
    return rows.map(toRecord)
  }

  async deleteAll() {
    const knex = await this.knex()
    return knex('total_supplies').delete()
  }

  async deleteHourlyUntil(timestamp: UnixTime) {
    const knex = await this.knex()
    return deleteHourlyUntil(knex, 'total_supplies', timestamp)
  }

  async deleteSixHourlyUntil(timestamp: UnixTime) {
    const knex = await this.knex()
    return deleteSixHourlyUntil(knex, 'total_supplies', timestamp)
  }
}

function toRecord(row: TotalSupplyRow): TotalSupplyRecord {
  return {
    timestamp: UnixTime.fromDate(row.unix_timestamp),
    assetId: AssetId(row.asset_id),
    totalSupply: BigInt(row.total_supply),
    chainId: ChainId(row.chain_id),
  }
}

function toRow(record: TotalSupplyRecord): TotalSupplyRow {
  return {
    unix_timestamp: record.timestamp.toDate(),
    asset_id: record.assetId.toString(),
    total_supply: record.totalSupply.toString(),
    chain_id: Number(record.chainId),
  }
}
