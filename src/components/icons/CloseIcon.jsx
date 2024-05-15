function CloseIcon({ color, width, height }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '1em'}
      height={height || '1em'}
      viewBox='0 0 512 512'
    >
      <path
        fill={color || '#000'}
        d='M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256z'
      />
    </svg>
  )
}
export default CloseIcon