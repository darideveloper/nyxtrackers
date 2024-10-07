export default function FormBtn({children, onClick, disabled, alternative, className}) {
  return (
    <button
      className={`
        btn form-btn
        ${alternative ? 'alternative': ''}
        ${className}
      `}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}