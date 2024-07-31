export default function FormBtn({children, onClick, disabled, alternative}) {
  return (
    <button
      className={`
        btn form-btn
        ${alternative ? 'alternative': ''}
      `}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}