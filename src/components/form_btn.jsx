import clsx from 'clsx'

export default function FormBtn({
  children,
  onClick,
  disabled,
  alternative,
  className,
}) {
  return (
    <button
      className={clsx('btn form-btn', { alternative }, className)}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
