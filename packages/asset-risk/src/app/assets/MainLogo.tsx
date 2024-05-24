import { ClassNameValue } from 'tailwind-merge'
import { cn } from '~/utils/cn'

export function MainLogo({ className }: { className?: ClassNameValue }) {
  return (
    <svg
      width="360"
      height="180"
      viewBox="0 0 360 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clipPath="url(#clip0_519_20425)">
        <path
          d="M150.499 140.233C152.253 141.262 153.801 142.584 154.668 144.458L161.771 140.233L170.055 144.209L171.939 151.478L154.982 172.613L151.365 176.058L137.851 159.494C137.158 158.704 136.476 157.804 135.816 156.808C135.123 155.822 134.56 154.782 134.137 153.688C133.672 152.594 133.444 151.521 133.444 150.459C133.444 148.044 133.899 145.964 134.83 144.209C135.718 142.454 136.996 141.099 138.642 140.135C140.299 139.182 142.248 138.694 144.5 138.694C146.72 138.694 148.712 139.214 150.499 140.233Z"
          fill="#F9347B"
        />
        <path
          d="M152.015 157.382H140.775V171.313H152.015V157.382Z"
          fill="#F9347B"
        />
        <path
          d="M151.808 176.708C152.306 177.196 152.924 177.445 153.649 177.445L172.003 177.185C172.739 177.185 173.411 177.088 173.844 176.438C174.407 175.593 172.913 172.353 170.942 172.126C168.982 171.888 163.47 171.877 160.33 171.595C160.081 171.573 160.016 171.216 160.103 170.978C160.33 170.306 169.469 159.483 169.469 159.483C170.162 158.693 170.844 157.793 171.505 156.808C172.198 155.811 172.761 154.771 173.194 153.677C173.649 152.583 173.887 151.51 173.887 150.449C173.887 148.033 173.421 145.953 172.49 144.198C171.602 142.443 170.325 141.089 168.679 140.135C167.022 139.171 165.073 138.694 162.821 138.694C160.612 138.694 158.608 139.204 156.822 140.233C155.068 141.251 153.519 142.584 152.653 144.447C152.144 145.541 151.852 147.318 152.144 148.52C152.393 149.506 152.642 149.755 153.389 150.004C154.136 150.254 154.375 149.712 154.624 148.52C154.873 147.329 155.284 145.985 155.869 145.043C156.616 143.851 157.991 142.974 159.096 142.562C160.027 142.215 161.575 141.923 162.821 142.064C165.04 142.313 166.61 143.104 167.769 144.447C168.939 145.79 169.837 148.022 169.577 149.712L169.567 149.766C169.415 150.806 169.198 152.225 168.679 153.233C168.148 154.262 166.535 156.288 165.538 157.447L151.808 173.133C151.353 173.599 151.115 174.184 151.115 174.921C151.115 175.614 151.353 176.21 151.808 176.708Z"
          fill="#1B1B1B"
        />
        <path
          d="M138.209 163.167C138.209 163.047 138.209 162.625 138.209 161.921C138.241 161.173 138.252 160.339 138.252 159.418C138.285 158.465 138.285 157.533 138.252 156.645C138.252 155.724 138.22 155.009 138.166 154.5C138.101 153.85 138.09 153.265 138.122 152.756C138.176 152.257 138.209 151.683 138.209 151.066C138.209 150.643 138.22 150.275 138.252 149.95C138.285 149.592 138.36 149.289 138.48 149.051C138.599 148.78 138.783 148.596 139.053 148.477C139.324 148.325 139.714 148.249 140.212 148.249C140.689 148.249 141.154 148.412 141.598 148.737C142.075 149.072 142.356 149.517 142.443 150.08L143.114 158.963L143.255 170.317L149.232 170.132C149.438 170.132 149.741 170.241 150.131 170.447C150.542 170.62 150.748 170.847 150.748 171.118C150.748 171.357 150.651 171.562 150.434 171.736C150.228 171.887 149.979 172.028 149.676 172.147C149.416 172.234 149.124 172.31 148.831 172.364C148.561 172.397 148.366 172.407 148.247 172.407C148.008 172.44 147.651 172.472 147.175 172.505C146.698 172.505 146.2 172.505 145.659 172.505C145.161 172.505 144.662 172.505 144.186 172.505C143.71 172.505 143.352 172.505 143.114 172.505C142.822 172.646 142.464 172.711 142.042 172.678C141.631 172.646 141.284 172.635 141.024 172.635H139.638C139.4 172.635 139.129 172.57 138.837 172.451C138.566 172.31 138.36 172.147 138.209 171.963V163.167Z"
          fill="#1B1B1B"
        />
        <path
          d="M177.039 170.219C177.039 169.656 177.05 169.114 177.082 168.605C177.136 168.106 177.169 167.586 177.169 167.045V165.701C177.169 165.582 177.158 165.376 177.125 165.084C177.093 164.759 177.061 164.423 177.039 164.098C177.039 163.741 177.017 163.416 176.985 163.112C176.963 162.82 176.941 162.614 176.941 162.495V157.804V153.286C176.941 152.452 176.985 151.651 177.082 150.881C177.201 150.08 177.223 149.289 177.169 148.509C177.764 147.826 178.479 147.415 179.313 147.263C180.147 147.079 180.991 146.992 181.857 146.992C183.103 146.992 184.24 147.241 185.247 147.751C186.265 148.227 187.109 149.094 187.791 150.34C188.3 151.326 188.658 152.246 188.863 153.113C189.069 153.947 189.177 154.911 189.177 156.016V157.262C188.939 158.01 188.668 158.692 188.376 159.321C188.105 159.916 187.672 160.469 187.077 160.967C186.871 161.119 186.622 161.271 186.319 161.422C186.026 161.541 185.81 161.671 185.691 161.823C186.828 162.473 187.64 163.253 188.149 164.141C188.69 165.041 188.95 166.113 188.95 167.359V168.518C188.896 168.876 188.744 169.276 188.506 169.731C188.268 170.143 188.03 170.468 187.791 170.706C187.196 171.216 186.676 171.584 186.232 171.822C185.788 172.061 185.333 172.245 184.889 172.364C184.445 172.483 183.969 172.537 183.46 172.537C182.962 172.537 182.345 172.537 181.63 172.537H180.027C179.789 172.483 179.605 172.418 179.486 172.364C179.399 172.299 179.313 172.245 179.226 172.18C179.161 172.093 179.075 172.017 178.955 171.963C178.869 171.866 178.717 171.779 178.512 171.692C178.327 171.606 178.165 171.541 178.013 171.508C177.894 171.486 177.775 171.454 177.656 171.421C177.569 171.389 177.461 171.346 177.342 171.291C177.255 171.226 177.158 171.129 177.039 170.977V170.219ZM180.785 169.504L180.872 170.078C181.056 170.143 181.219 170.219 181.37 170.306C181.511 170.371 181.652 170.425 181.771 170.49C181.89 170.544 182.009 170.587 182.128 170.62H182.215C182.724 170.62 183.222 170.425 183.731 170.035C184.24 169.656 184.489 169.146 184.489 168.518C184.489 168.193 184.521 167.846 184.575 167.489C184.673 167.131 184.64 166.601 184.489 165.886C184.337 165.019 183.926 164.38 183.243 163.968C182.55 163.546 181.857 163.34 181.143 163.34H180.872C180.818 164.206 180.785 164.976 180.785 165.658C180.785 166.351 180.785 167.11 180.785 167.944V169.504ZM180.785 160.794C182.063 160.285 182.962 159.591 183.46 158.692C184.001 157.804 184.261 156.688 184.261 155.345C184.261 154.836 184.25 154.218 184.218 153.471C184.196 152.723 184.088 152.008 183.915 151.326C183.731 150.643 183.449 150.058 183.059 149.581C182.67 149.072 182.128 148.823 181.413 148.823C180.785 148.823 180.157 148.942 179.529 149.181V149.538C179.529 150.015 179.584 150.459 179.67 150.881C179.789 151.293 179.876 151.683 179.941 152.041L180.785 160.794ZM191.311 168.345C191.246 167.088 191.137 165.777 190.996 164.412C190.877 163.036 190.726 161.736 190.553 160.48V157.176V153.828C190.553 153.763 190.553 153.59 190.553 153.286C190.574 152.994 190.596 152.669 190.596 152.311C190.617 151.954 190.65 151.607 190.682 151.282C190.715 150.925 190.737 150.676 190.769 150.524C190.856 149.776 191.235 149.224 191.884 148.866C192.567 148.509 193.346 148.271 194.212 148.151C195.1 148.011 195.988 147.946 196.887 147.978C197.775 147.978 198.49 147.978 199.031 147.978H198.76C198.966 147.978 199.248 148.021 199.605 148.108C199.995 148.173 200.19 148.336 200.19 148.596C200.19 148.812 200.103 148.975 199.919 149.094C199.778 149.181 199.594 149.224 199.388 149.224C199.388 149.224 199.204 149.256 198.847 149.311C198.49 149.343 198.078 149.408 197.602 149.495C197.158 149.549 196.703 149.625 196.259 149.722C195.848 149.776 195.588 149.82 195.501 149.852C195.111 149.939 194.862 150.145 194.743 150.481V151.596V152.799C194.776 153.276 194.808 153.882 194.83 154.63C194.895 155.377 194.938 156.114 194.97 156.861C194.992 157.576 195.025 158.216 195.057 158.779C195.09 159.321 195.1 159.602 195.1 159.635L195.284 160.122C195.869 160.122 196.486 160.111 197.114 160.079C197.732 160.025 198.316 159.971 198.847 159.949C199.302 159.916 199.702 159.992 200.06 160.166C200.439 160.35 200.634 160.588 200.634 160.881C200.634 161.119 200.547 161.314 200.363 161.466C200.222 161.585 200.027 161.682 199.789 161.78C199.551 161.834 199.313 161.899 199.074 161.953C198.836 161.986 198.652 162.018 198.533 162.04C198.089 162.105 197.764 162.159 197.558 162.224C197.353 162.256 197.158 162.278 196.974 162.311C196.8 162.311 196.584 162.311 196.346 162.311C196.14 162.311 195.815 162.311 195.371 162.311C195.371 163.47 195.349 164.618 195.328 165.756C195.295 166.85 195.284 167.987 195.284 169.146C195.728 169.146 196.064 169.146 196.302 169.146C196.541 169.114 196.768 169.103 196.974 169.103C197.179 169.071 197.407 169.06 197.645 169.06C197.916 169.027 198.273 169.016 198.717 169.016C198.869 169.016 199.074 169.027 199.345 169.06C199.637 169.081 199.919 169.146 200.19 169.233C200.482 169.298 200.742 169.396 200.948 169.547C201.153 169.699 201.262 169.905 201.262 170.176C201.262 170.414 201.175 170.62 200.991 170.793C200.818 170.945 200.59 171.086 200.32 171.205C200.081 171.291 199.843 171.378 199.605 171.465C199.367 171.53 199.193 171.573 199.074 171.606H196.259H195.284C195.22 171.606 195.09 171.606 194.873 171.606C194.7 171.573 194.494 171.562 194.256 171.562C194.039 171.53 193.833 171.508 193.628 171.508C193.444 171.486 193.314 171.465 193.227 171.465C192.902 171.465 192.545 171.411 192.155 171.291C191.765 171.14 191.484 170.934 191.311 170.663V168.345ZM201.738 171.151C201.738 170.652 201.771 169.97 201.825 169.103C201.922 168.204 202.009 167.348 202.095 166.514C202.182 165.647 202.258 164.9 202.323 164.282C202.409 163.654 202.453 163.329 202.453 163.296L204.153 150.741C204.153 150.719 204.164 150.6 204.196 150.383C204.25 150.177 204.315 149.939 204.369 149.668C204.434 149.408 204.488 149.148 204.553 148.91C204.608 148.65 204.662 148.455 204.683 148.336C204.716 148.184 204.748 148.021 204.781 147.837C204.835 147.631 204.889 147.436 204.954 147.263C205.008 147.079 205.106 146.938 205.225 146.819C205.344 146.7 205.506 146.635 205.712 146.635H207.412C207.65 146.635 207.856 146.754 208.029 146.992C208.213 147.231 208.343 147.458 208.441 147.664C208.527 147.935 208.647 148.271 208.798 148.693C208.971 149.072 209.155 149.462 209.329 149.852C209.513 150.242 209.654 150.6 209.773 150.925C209.892 151.217 209.957 151.38 209.957 151.412C210.964 154.716 211.982 157.999 212.989 161.238C214.007 164.488 214.819 167.63 215.447 170.663V170.891C215.447 171.367 215.219 171.725 214.775 171.963C214.364 172.201 213.985 172.321 213.66 172.321C213.541 172.321 213.346 172.321 213.075 172.321C212.815 172.288 212.523 172.256 212.231 172.223C211.96 172.169 211.711 172.082 211.473 171.963C211.267 171.844 211.148 171.681 211.115 171.465L209.859 164.586C209.275 164.586 208.538 164.607 207.672 164.64C206.849 164.661 206.113 164.683 205.485 164.683L205.311 164.813C205.192 167.196 204.911 169.558 204.467 171.92L204.283 172.18C204.229 172.245 204.088 172.375 203.882 172.581C203.709 172.765 203.59 172.884 203.525 172.938H203.395C202.918 172.938 202.518 172.808 202.182 172.537C201.89 172.277 201.738 171.974 201.738 171.649V171.151ZM209.199 162.137V161.466C209.166 161.346 209.123 161.151 209.058 160.881C209.036 160.588 208.982 160.285 208.928 159.992C208.863 159.689 208.809 159.429 208.744 159.191C208.722 158.92 208.69 158.736 208.657 158.649C208.603 158.378 208.484 157.966 208.3 157.403C208.148 156.807 207.975 156.19 207.769 155.572C207.585 154.944 207.412 154.348 207.228 153.785C207.055 153.211 206.914 152.799 206.827 152.528L205.582 162.137H209.199ZM219.616 170.62V169.504C219.616 169.146 219.616 168.583 219.616 167.803C219.648 167.001 219.67 166.113 219.67 165.127C219.691 164.141 219.724 163.112 219.756 162.04C219.789 160.946 219.81 159.906 219.843 158.92C219.875 157.934 219.908 157.056 219.93 156.287C219.962 155.507 219.995 154.933 220.027 154.543C220.027 153.796 220.07 153.07 220.157 152.355C220.276 151.64 220.319 150.881 220.287 150.08H216.67C216.465 150.08 216.226 150.026 215.956 149.939C215.717 149.82 215.598 149.646 215.598 149.408C215.598 149.191 215.652 149.051 215.739 148.953C215.858 148.866 216.031 148.78 216.27 148.693C217.168 148.693 218.013 148.661 218.814 148.596C219.648 148.541 220.471 148.476 221.272 148.422C222.074 148.336 222.897 148.26 223.73 148.195C224.564 148.141 225.441 148.108 226.362 148.108H227.878L228.733 148.552V148.866C228.733 149.17 228.549 149.376 228.192 149.495C227.867 149.614 227.466 149.701 226.99 149.766C226.394 149.852 225.766 149.885 225.116 149.852C224.488 149.82 224.066 149.852 223.86 149.939V153.687C223.86 155.388 223.904 157.067 224.001 158.736C224.088 160.404 224.131 162.04 224.131 163.654C224.131 164.423 224.131 165.16 224.131 165.842C224.163 166.525 224.174 167.196 224.174 167.846C224.174 168.507 224.142 169.157 224.088 169.818C224.055 170.468 223.979 171.172 223.86 171.92C223.709 172.093 223.525 172.245 223.286 172.364C223.048 172.451 222.821 172.526 222.615 172.581H221.5C221.164 172.581 220.828 172.581 220.471 172.581C220.114 172.559 219.832 172.331 219.616 171.92V170.62Z"
          fill="#1B1B1B"
        />
      </g>
      <path
        d="M333.485 121.396L328.285 94.6955H324.785V121.396H312.185V51.3955H329.685C338.785 51.3955 344.885 56.9955 344.885 65.4955V80.9955C344.885 85.5955 342.985 89.3955 339.785 91.7955L346.185 121.396H333.485ZM324.785 62.8955V83.8955H328.485C330.785 83.8955 332.285 82.4955 332.285 80.1955V66.5955C332.285 64.2955 330.785 62.8955 328.485 62.8955H324.785Z"
        fill="url(#paint0_linear_519_20425)"
      />
      <path
        d="M308.567 62.8955H297.367V80.2955H307.467V91.4955H297.367V109.896H308.567V121.396H284.767V51.3955H308.567V62.8955Z"
        fill="url(#paint1_linear_519_20425)"
      />
      <path
        d="M244.067 121.396V51.3955H258.567L265.767 84.5955L266.767 93.3955H268.467L267.367 84.5955V51.3955H279.967V121.396H265.567L258.367 88.1955L257.267 79.3955H255.567L256.667 88.1955V121.396H244.067Z"
        fill="url(#paint2_linear_519_20425)"
      />
      <path
        d="M203.368 121.396V51.3955H217.868L225.068 84.5955L226.068 93.3955H227.768L226.668 84.5955V51.3955H239.268V121.396H224.868L217.668 88.1955L216.568 79.3955H214.868L215.968 88.1955V121.396H203.368Z"
        fill="url(#paint3_linear_519_20425)"
      />
      <path
        d="M187.757 121.396L186.357 104.496H178.857L177.457 121.396H164.757L173.257 51.3955H192.657L201.057 121.396H187.757ZM179.757 94.0955H185.457L183.457 69.6955V63.8955H181.757V69.6955L179.757 94.0955Z"
        fill="url(#paint4_linear_519_20425)"
      />
      <path
        d="M147.248 122.595C137.448 122.595 130.848 116.495 130.848 107.395V65.2953C130.848 56.2953 137.448 50.1953 147.248 50.1953C157.048 50.1953 163.648 56.2953 163.648 65.2953V79.8953H151.048V65.3953C151.048 63.0953 149.548 61.6953 147.248 61.6953C144.948 61.6953 143.448 63.0953 143.448 65.3953V107.395C143.448 109.695 144.948 111.095 147.248 111.095C149.548 111.095 151.048 109.695 151.048 107.395V91.8953H163.648V107.395C163.648 116.495 157.048 122.595 147.248 122.595Z"
        fill="url(#paint5_linear_519_20425)"
      />
      <path
        d="M111.119 122.595C101.319 122.595 94.8193 116.495 94.8193 107.395V96.9953H107.419V107.395C107.419 109.695 108.919 111.095 111.119 111.095C113.419 111.095 114.919 109.695 114.919 107.395V99.2953C114.919 90.9953 95.0193 89.7953 95.0193 73.6953V65.2953C95.0193 56.1953 101.419 50.1953 111.119 50.1953C120.819 50.1953 127.319 56.1953 127.319 65.2953V74.5953H114.719V65.1953C114.719 63.0953 113.319 61.6953 111.119 61.6953C109.019 61.6953 107.619 62.9953 107.619 65.1953V72.1953C107.619 80.5953 127.519 81.6953 127.519 97.7953V107.395C127.519 116.495 120.919 122.595 111.119 122.595Z"
        fill="url(#paint6_linear_519_20425)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3594 67.2554C24.3594 65.1716 26.0486 63.4824 28.1323 63.4824H66.7724C68.8562 63.4824 70.5454 65.1716 70.5454 67.2554V78.0519H67.5454V67.2554C67.5454 66.8285 67.1993 66.4824 66.7724 66.4824H28.1323C27.7054 66.4824 27.3594 66.8285 27.3594 67.2554V105.895C27.3594 106.322 27.7054 106.668 28.1323 106.668H66.7724C67.1993 106.668 67.5454 106.322 67.5454 105.895V95.099H70.5454V105.895C70.5454 107.979 68.8561 109.668 66.7724 109.668H28.1323C26.0486 109.668 24.3594 107.979 24.3594 105.895V67.2554Z"
        fill="#9F37C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.2256 82.7549V90.3926H70.1809C72.29 90.3926 73.9997 88.6828 73.9997 86.5737C73.9997 84.4646 72.29 82.7549 70.1809 82.7549H65.2256ZM64.4985 79.7549C63.2432 79.7549 62.2256 80.7725 62.2256 82.0278V91.1196C62.2256 92.3749 63.2432 93.3926 64.4985 93.3926H70.1809C73.9468 93.3926 76.9997 90.3397 76.9997 86.5737C76.9997 82.8078 73.9468 79.7549 70.1809 79.7549H64.4985Z"
        fill="#9F37C4"
      />
      <path
        d="M47.4282 72.7103C47.2843 72.7144 47.1434 72.7525 47.0172 72.8217C46.8909 72.8908 46.7829 72.989 46.7019 73.108L39.4285 83.7731C39.3553 83.8803 39.3058 84.002 39.2835 84.1299C39.2612 84.2578 39.2665 84.389 39.2992 84.5147C39.3318 84.6404 39.391 84.7576 39.4727 84.8585C39.5545 84.9594 39.6568 85.0416 39.773 85.0996L47.0464 88.731C47.1727 88.7941 47.3119 88.827 47.4531 88.827C47.5942 88.827 47.7335 88.7941 47.8597 88.731L55.1332 85.0996C55.2493 85.0416 55.3517 84.9594 55.4334 84.8585C55.5152 84.7576 55.5744 84.6404 55.607 84.5147C55.6396 84.389 55.645 84.2578 55.6227 84.1299C55.6004 84.002 55.5509 83.8803 55.4776 83.7731L48.2042 73.108C48.1186 72.982 48.0026 72.8796 47.867 72.8101C47.7314 72.7406 47.5805 72.7063 47.4282 72.7103ZM47.4531 75.2318V81.8021L53.3805 83.9436L47.4531 86.902V81.8021L41.6127 83.7962L47.4531 75.2318ZM40.1459 87.2571C39.9775 87.2632 39.814 87.316 39.6738 87.4096C39.5337 87.5032 39.4223 87.634 39.3521 87.7872C39.2819 87.9405 39.2557 88.1102 39.2764 88.2775C39.2971 88.4448 39.3639 88.603 39.4694 88.7346L46.7428 97.8263C46.828 97.9329 46.936 98.019 47.059 98.0781C47.182 98.1372 47.3166 98.1679 47.4531 98.1679C47.5895 98.1679 47.7242 98.1372 47.8472 98.0781C47.9701 98.019 48.0782 97.9329 48.1634 97.8263L55.4368 88.7346C55.5665 88.5727 55.637 88.3714 55.6366 88.164C55.6361 87.9566 55.5648 87.7555 55.4344 87.5942C55.304 87.433 55.1223 87.3211 54.9196 87.2772C54.7169 87.2333 54.5053 87.2601 54.3199 87.353L47.4531 90.7873L40.5863 87.353C40.4499 87.2846 40.2984 87.2516 40.1459 87.2571ZM43.4772 90.8317L47.0464 92.6163C47.1727 92.6794 47.3119 92.7122 47.4531 92.7122V95.802L43.4772 90.8317Z"
        fill="#40396E"
      />
      <g opacity="0.55">
        <path
          d="M14 90.4639H84V117.5C84 119.499 81.9989 121.575 80 121.575H18.6196C16.6207 121.575 14 119.499 14 117.5V90.4639Z"
          fill="url(#paint7_linear_519_20425)"
        />
      </g>
      <path
        d="M15.4583 88.5195H82.5417C83.3467 88.5195 84 89.1729 84 89.9779C84 90.7829 83.3467 91.4362 82.5417 91.4362H15.4583C14.6533 91.4362 14 90.7829 14 89.9779C14 89.1729 14.6533 88.5195 15.4583 88.5195Z"
        fill="#9F37C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84 117.575V109.575H81V117.575C81 118.127 80.5523 118.575 80 118.575H72V121.575H80C82.2091 121.575 84 119.784 84 117.575Z"
        fill="#9F37C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 117.575V109.575H17V117.575C17 118.127 17.4477 118.575 18 118.575H26V121.575H18C15.7909 121.575 14 119.784 14 117.575Z"
        fill="#9F37C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 63.5752H17V55.5752C17 55.0229 17.4477 54.5752 18 54.5752H26V51.5752H18C15.7909 51.5752 14 53.3661 14 55.5752V63.5752Z"
        fill="#9F37C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84 55.5752C84 53.3661 82.2091 51.5752 80 51.5752H72V54.5752H80C80.5523 54.5752 81 55.0229 81 55.5752V63.5752H84V55.5752Z"
        fill="#9F37C4"
      />
      <path
        d="M265.001 40.5514C260.501 40.5514 258.113 37.7506 258.986 33.5723L259.996 28.797H265.781L264.771 33.5723C264.541 34.6283 265.092 35.2711 266.148 35.2711C267.159 35.2711 267.985 34.6283 268.215 33.5723L269.041 29.8531C269.868 26.0421 260.822 25.4911 262.383 18.0987L263.21 14.2418C264.082 10.0635 267.618 7.30859 272.071 7.30859C276.525 7.30859 278.959 10.0635 278.04 14.2418L277.122 18.512H271.337L272.301 14.1959C272.439 13.2317 271.934 12.5889 270.97 12.5889C269.959 12.5889 269.179 13.1858 268.995 14.1959L268.306 17.41C267.526 21.2669 276.525 21.772 274.964 29.1644L274 33.5723C273.128 37.7506 269.5 40.5514 265.001 40.5514Z"
        fill="url(#paint8_linear_519_20425)"
      />
      <path
        d="M264.721 7.85938L256.869 23.5625L258.246 40.0002H251.681L251.359 26.2715H250.303L247.364 40.0002H241.579L248.421 7.85938H254.206L251.359 21.129H252.461L258.43 7.85938H264.721Z"
        fill="url(#paint9_linear_519_20425)"
      />
      <path
        d="M232.2 40.5514C227.7 40.5514 225.312 37.7506 226.185 33.5723L227.195 28.797H232.98L231.97 33.5723C231.741 34.6283 232.292 35.2711 233.348 35.2711C234.358 35.2711 235.184 34.6283 235.414 33.5723L236.24 29.8531C237.067 26.0421 228.021 25.4911 229.583 18.0987L230.409 14.2418C231.281 10.0635 234.817 7.30859 239.271 7.30859C243.725 7.30859 246.158 10.0635 245.24 14.2418L244.321 18.512H238.536L239.5 14.1959C239.638 13.2317 239.133 12.5889 238.169 12.5889C237.159 12.5889 236.378 13.1858 236.194 14.1959L235.506 17.41C234.725 21.2669 243.724 21.772 242.163 29.1644L241.199 33.5723C240.327 37.7506 236.699 40.5514 232.2 40.5514Z"
        fill="url(#paint10_linear_519_20425)"
      />
      <path
        d="M217.433 40.0002L224.274 7.85938H230.059L223.218 40.0002H217.433Z"
        fill="url(#paint11_linear_519_20425)"
      />
      <path
        d="M215.461 7.85938C219.639 7.85938 221.843 10.4306 221.062 14.3335L219.547 21.4504C219.088 23.5625 217.848 25.3073 216.103 26.4092L216.195 40.0002H210.364L210.594 27.7408H208.987L206.369 40.0002H200.584L207.425 7.85938H215.461ZM212.109 13.1397L210.043 22.7819H211.741C212.798 22.7819 213.624 22.1391 213.808 21.083L215.185 14.8385C215.369 13.7825 214.818 13.1397 213.808 13.1397H212.109Z"
        fill="url(#paint12_linear_519_20425)"
      />
      <path
        d="M194.075 7.85938H199.86L198.575 13.9202L195.407 18.6954H191.642L193.937 14.7008H192.606L194.075 7.85938Z"
        fill="url(#paint13_linear_519_20425)"
      />
      <path
        d="M178.267 40.5514C173.767 40.5514 171.38 37.7506 172.252 33.5723L173.262 28.797H179.048L178.038 33.5723C177.808 34.6283 178.359 35.2711 179.415 35.2711C180.425 35.2711 181.252 34.6283 181.481 33.5723L182.308 29.8531C183.134 26.0421 174.089 25.4911 175.65 18.0987L176.476 14.2418C177.349 10.0635 180.884 7.30859 185.338 7.30859C189.792 7.30859 192.225 10.0635 191.307 14.2418L190.389 18.512H184.603L185.568 14.1959C185.705 13.2317 185.2 12.5889 184.236 12.5889C183.226 12.5889 182.445 13.1858 182.262 14.1959L181.573 17.41C180.792 21.2669 189.792 21.772 188.231 29.1644L187.267 33.5723C186.394 37.7506 182.767 40.5514 178.267 40.5514Z"
        fill="url(#paint14_linear_519_20425)"
      />
      <path
        d="M177.023 7.85938L175.921 13.1397H172.615L166.875 40.0002H161.09L166.829 13.1397H163.477L164.625 7.85938H177.023Z"
        fill="url(#paint15_linear_519_20425)"
      />
      <path
        d="M162.466 13.1397H157.324L155.579 21.129H160.216L159.114 26.2715H154.523L152.686 34.7199H157.875L156.727 40.0002H145.799L152.64 7.85938H163.568L162.466 13.1397Z"
        fill="url(#paint16_linear_519_20425)"
      />
      <path
        d="M136.419 40.5514C131.92 40.5514 129.532 37.7506 130.405 33.5723L131.415 28.797H137.2L136.19 33.5723C135.96 34.6283 136.511 35.2711 137.567 35.2711C138.577 35.2711 139.404 34.6283 139.634 33.5723L140.46 29.8531C141.286 26.0421 132.241 25.4911 133.802 18.0987L134.629 14.2418C135.501 10.0635 139.037 7.30859 143.49 7.30859C147.944 7.30859 150.378 10.0635 149.459 14.2418L148.541 18.512H142.756L143.72 14.1959C143.858 13.2317 143.353 12.5889 142.388 12.5889C141.378 12.5889 140.598 13.1858 140.414 14.1959L139.725 17.41C138.945 21.2669 147.944 21.772 146.383 29.1644L145.419 33.5723C144.546 37.7506 140.919 40.5514 136.419 40.5514Z"
        fill="url(#paint17_linear_519_20425)"
      />
      <path
        d="M120.199 40.5514C115.699 40.5514 113.311 37.7506 114.184 33.5723L115.194 28.797H120.979L119.969 33.5723C119.74 34.6283 120.291 35.2711 121.347 35.2711C122.357 35.2711 123.183 34.6283 123.413 33.5723L124.239 29.8531C125.066 26.0421 116.02 25.4911 117.582 18.0987L118.408 14.2418C119.28 10.0635 122.816 7.30859 127.27 7.30859C131.724 7.30859 134.157 10.0635 133.239 14.2418L132.32 18.512H126.535L127.499 14.1959C127.637 13.2317 127.132 12.5889 126.168 12.5889C125.158 12.5889 124.377 13.1858 124.193 14.1959L123.505 17.41C122.724 21.2669 131.724 21.772 130.162 29.1644L129.198 33.5723C128.326 37.7506 124.698 40.5514 120.199 40.5514Z"
        fill="url(#paint18_linear_519_20425)"
      />
      <path
        d="M106.507 7.85938H115.415L112.43 40.0002H106.323L107.333 32.2405H103.89L101.594 40.0002H95.7627L106.507 7.85938ZM109.4 16.2619L109.996 13.5988H109.17L108.619 16.2619L105.313 27.4653H107.93L109.4 16.2619Z"
        fill="url(#paint19_linear_519_20425)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_519_20425"
          x1="239.921"
          y1="49.0748"
          x2="219.85"
          y2="137.362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB3BD2" />
          <stop offset="1" stopColor="#D08AE9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_519_20425"
          x1="239.921"
          y1="49.0748"
          x2="219.85"
          y2="137.362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB3BD2" />
          <stop offset="1" stopColor="#D08AE9" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_519_20425"
          x1="239.921"
          y1="49.0748"
          x2="219.85"
          y2="137.362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB3BD2" />
          <stop offset="1" stopColor="#D08AE9" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_519_20425"
          x1="239.921"
          y1="49.0748"
          x2="219.85"
          y2="137.362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB3BD2" />
          <stop offset="1" stopColor="#D08AE9" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_519_20425"
          x1="239.921"
          y1="49.0748"
          x2="219.85"
          y2="137.362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB3BD2" />
          <stop offset="1" stopColor="#D08AE9" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_519_20425"
          x1="239.922"
          y1="49.0746"
          x2="219.851"
          y2="137.361"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB3BD2" />
          <stop offset="1" stopColor="#D08AE9" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_519_20425"
          x1="239.921"
          y1="49.0746"
          x2="219.85"
          y2="137.361"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB3BD2" />
          <stop offset="1" stopColor="#D08AE9" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_519_20425"
          x1="49"
          y1="90.4639"
          x2="49"
          y2="121.575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52FF64" />
          <stop offset="1" stopColor="#52FF64" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_519_20425"
          x1="201.415"
          y1="3.30042"
          x2="189.119"
          y2="47.5888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_519_20425"
          x1="201.415"
          y1="3.30022"
          x2="189.119"
          y2="47.5886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_519_20425"
          x1="201.415"
          y1="3.30042"
          x2="189.119"
          y2="47.5888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_519_20425"
          x1="201.415"
          y1="3.30022"
          x2="189.119"
          y2="47.5886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_519_20425"
          x1="201.416"
          y1="3.30022"
          x2="189.119"
          y2="47.5886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_519_20425"
          x1="201.416"
          y1="3.30022"
          x2="189.119"
          y2="47.5886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_519_20425"
          x1="201.415"
          y1="3.30042"
          x2="189.119"
          y2="47.5888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_519_20425"
          x1="201.416"
          y1="3.30022"
          x2="189.119"
          y2="47.5886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_519_20425"
          x1="201.415"
          y1="3.30022"
          x2="189.119"
          y2="47.5886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_519_20425"
          x1="201.416"
          y1="3.30042"
          x2="189.119"
          y2="47.5888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_519_20425"
          x1="201.416"
          y1="3.30042"
          x2="189.12"
          y2="47.5888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_519_20425"
          x1="201.415"
          y1="3.30021"
          x2="189.119"
          y2="47.5886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD7CFF" />
          <stop offset="1" stopColor="#9F37C4" />
        </linearGradient>
        <clipPath id="clip0_519_20425">
          <rect
            width="95.3333"
            height="39"
            fill="white"
            transform="translate(133.444 138.575)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}