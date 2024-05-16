function GridWrapper({
  children,
  sm = 1,
  md = 2,
  lg = 3,
  xl = 4,
  xxl = 5,
  xxxl = 6,
}) {
  return (
    <div
      className={`grid col-start-3 sm:grid-cols-${sm} md:grid-cols-${md} xl:grid-cols-${xl} 2xl:grid-cols-${xxl} 4xl:grid-cols-${xxxl}  gap-10  place-items-center p-6`}
    >
      {children}
    </div>
  )
}
export default GridWrapper
