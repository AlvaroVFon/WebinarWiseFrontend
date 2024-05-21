function NotificationIcon({ color, size }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || 25}
      height={size || 25}
      viewBox='0 0 24 24'
    >
      <path
        fill={color || '#a8b3cf'}
        d='M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6T9.175 7.175T8 10z'
      />
    </svg>
  )
}
export default NotificationIcon
