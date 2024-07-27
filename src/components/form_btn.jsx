export default function FormBtn({children, onClick}) {
  return (
    <button
      className={`
        btn form-btn
      `}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}