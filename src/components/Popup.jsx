function Popup({ className, showPopup, message }) {
  return (
    showPopup && (
      <div
        className={`${className} p-2 bg-bgTertiary rounded-md w-40 text-center text-accent top-0 left-12 z-10`}
      >
        <p>{message}</p>
      </div>
    )
  )
}
export default Popup
