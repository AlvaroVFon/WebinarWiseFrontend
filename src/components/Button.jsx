import Spinner from './icons/Spinner'
function Button({
  type = '',
  label = 'Click here',
  loadingLabel = 'Loading',
  onClick,
  isLoading = false,
  spinnerWidth = 20,
  spinnerHeight = 20,
  spinnerColor = '#3b82f6',
  width = 32,
  height = 12,
  textColor = 'blue-500',
  textHoverColor = 'blue-700',
  bgColor = 'none',
  bgHoverColor = 'none',
  borderColor = 'blue-500',
  borderHoverColor = 'blue-700',
  disabled,
  disabledColor = 'muted',
  className,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        disabled
          ? `${className} flex items-center justify-center gap-3 w-${width} h-${height} text-${disabledColor} border border-${disabledColor} rounded ${width} ${height} cursor-not-allowed`
          : `${className} flex items-center justify-center gap-3 w-${width} h-${height} text-${textColor} hover:text-${textHoverColor} bg-${bgColor} hover:bg-${bgHoverColor} border border-${borderColor} hover:border-${borderHoverColor} duration-300 rounded`
      }
    >
      {isLoading ? loadingLabel : label}
      {isLoading && (
        <Spinner
          width={spinnerWidth}
          height={spinnerHeight}
          color={spinnerColor}
        />
      )}
    </button>
  )
}
export default Button
