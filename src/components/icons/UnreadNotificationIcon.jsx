function UnreadNotificationIcon({ color, size }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || 25}
      height={size || 25}
      viewBox='0 0 24 24'
    >
      <path
        fill={color || '#a8b3cf'}
        d='M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-7-3q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.325q-.275.55-.4 1.125T13 6.125q-.25-.05-.488-.088T12 6q-1.65 0-2.825 1.175T8 10v7h8v-6.425q.45.2.963.313T18 11v6h1q.425 0 .713.288T20 18t-.288.713T19 19zM18 9q-1.25 0-2.125-.875T15 6t.875-2.125T18 3t2.125.875T21 6t-.875 2.125T18 9'
      />
    </svg>
  )
}
export default UnreadNotificationIcon