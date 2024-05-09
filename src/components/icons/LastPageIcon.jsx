function LastPageIcon({ color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 24 24'
    >
      <path
        fill={color ? color : '#a8b3cf'}
        d='m7 17.308l-.708-.708l4.6-4.6l-4.6-4.6L7 6.692L12.308 12zm9.5.192v-11h1v11z'
      />
    </svg>
  )
}
export default LastPageIcon
