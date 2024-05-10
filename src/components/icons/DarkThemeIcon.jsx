function DarkThemeIcon({ color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 24 24'
    >
      <path
        fill={color ? color : '#a8b3cf'}
        d='M12.058 20q-3.333 0-5.667-2.334Q4.058 15.333 4.058 12q0-2.47 1.413-4.536t4.01-2.972q.306-.107.536-.056q.231.05.381.199t.191.38q.042.233-.062.489q-.194.477-.282.971q-.087.494-.087 1.025q0 2.673 1.863 4.537q1.864 1.863 4.537 1.863q.698 0 1.278-.148q.58-.148.987-.24q.217-.04.4.01q.18.051.29.176q.116.125.157.308q.042.182-.047.417q-.715 2.45-2.803 4.014Q14.733 20 12.058 20'
      />
    </svg>
  )
}
export default DarkThemeIcon