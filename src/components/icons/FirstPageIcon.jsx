function FirstPageIcon({ color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 24 24'
    >
      <path
        fill={color ? color : '#a8b3cf'}
        d='M6.5 17.5v-11h1v11zm10.5-.192L11.692 12L17 6.692l.708.708l-4.6 4.6l4.6 4.6z'
      />
    </svg>
  )
}
export default FirstPageIcon
