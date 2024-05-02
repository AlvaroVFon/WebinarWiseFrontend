function Popup({ className, showPopup }) {
  return (
    showPopup && (
      <div
        className={`${className} p-2 bg-bgTertiary rounded-md w-36 text-center text-accent top-0 left-12`}
      >
        <p>Link copied to clipboard!</p>
      </div>
    )
  )
}
export default Popup
