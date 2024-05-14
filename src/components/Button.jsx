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
  padding = 2,
  disabled,
  className,
}) {
  const style = disabled
    ? `${className} flex items-center justify-center p-${padding} gap-3 w-${width} h-12 text-muted border border-muted rounded cursor-not-allowed`
    : `${className} flex items-center justify-center p-${padding} gap-3 w-${width} h-12 text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 duration-300 rounded`
  return (
    <button
      onClick={onClick}
      type={type}
      className={style}
      disabled={disabled}
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
