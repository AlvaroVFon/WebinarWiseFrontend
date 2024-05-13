import Spinner from './icons/Spinner'
function Button({
  type = '',
  label = 'Click here',
  loadingLabel = 'Loading',
  onClick,
  isLoading = false,
  spinnerWidth = 20,
  spinnerHeight = 20,
  width = 32,
  height = 12,
  padding = 2,
  disabled,
  disabledColor = 'muted',
  className,
}) {
  const style = disabled
    ? `${className} flex items-center justify-center p-${padding} gap-3 w-${width} h-${height} text-muted rounded w-${width} h-${height} cursor-not-allowed`
    : `${className} flex items-center justify-center p-${padding} gap-3 w-${width} h-${height} text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 duration-300 rounded`
  return (
    <button
      onClick={onClick}
      type={type}
      className={style}
    >
      {isLoading ? loadingLabel : label}
      {isLoading && (
        <Spinner
          width={spinnerWidth}
          height={spinnerHeight}
          color='#3b82f6'
        />
      )}
    </button>
  )
}
export default Button
