function CategoryIcon({ color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 24 24'
      className='text-accentDarker hover:scale-110 duration-300 ease-in-out'
    >
      <path
        fill={color ? color : '#a8b3cf'}
        d='M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4M7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4'
      />
    </svg>
  )
}
export default CategoryIcon
