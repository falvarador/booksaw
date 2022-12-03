import { Stack } from '@chakra-ui/react'

export default function Background() {
  return (
    <Stack
      as='span'
      h='96'
      right='36'
      overflow='hidden'
      position='absolute'
      zIndex='-1'
    >
      <svg
        width='451'
        height='562'
        viewBox='0 0 451 562'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M353.166 474.285C380.711 440.903 397.693 411.217 387.929 369.053C377.641 324.631 326.003 328.015 303.592 288.305C266.828 223.161 355.048 147.273 299.841 96.8004C268.016 67.704 237.733 60.8464 194.673 63.1535C133.324 66.4403 97.054 98.4912 63.4457 149.92C11.5052 229.402 27.319 315.409 83.0847 392.256C147.826 481.471 283.009 559.307 353.166 474.285Z'
          fill='#EFEEE8'
        />
        <path
          d='M402.842 514.846C437.266 473.128 458.489 436.029 446.286 383.336C433.429 327.82 368.896 332.05 340.888 282.423C294.944 201.012 405.194 106.172 336.201 43.0958C296.428 6.73339 258.583 -1.8366 204.77 1.04653C128.101 5.1542 82.7739 45.2088 40.7729 109.481C-24.1383 208.811 -4.3754 316.296 65.3161 412.332C146.225 523.826 315.165 621.1 402.842 514.846Z'
          stroke='#E5E4DE'
        />
      </svg>
    </Stack>
  )
}
