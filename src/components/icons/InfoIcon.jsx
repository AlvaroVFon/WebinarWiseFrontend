function InfoIcon({ width, height, color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : '20'}
      height={height ? height : '20'}
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke={color ? color : '#85929a'}
        strokeLinejoin='round'
      >
        <circle
          cx='12'
          cy='12'
          r='9'
          strokeLinecap='round'
          strokeWidth='1.5'
        />
        <path
          strokeWidth='2.25'
          d='M12 8h.01v.01H12z'
        />
        <path
          strokeLinecap='round'
          strokeWidth='1.5'
          d='M12 12v4'
        />
      </g>
    </svg>
  )
}
export default InfoIcon
