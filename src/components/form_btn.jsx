export default function FormBtn({children, onClick, disabled}) {
  return (
    <button
      className={`
        btn form-btn
      `}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}