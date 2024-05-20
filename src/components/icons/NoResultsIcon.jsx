function NoResultIcon({ color, size }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || 25}
      height={size || 25}
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke={color || '#a8b3cf'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path d='m13.5 8.5l-5 5m0-5l5 5' />
        <circle
          cx='11'
          cy='11'
          r='8'
        />
        <path d='m21 21l-4.3-4.3' />
      </g>
    </svg>
  )
}
export default NoResultIcon
