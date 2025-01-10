/**
 * InputCheckbox component
 * @param {object} props
 * @param {boolean} props.checked input checked state
 * @param {string} props.checked input checked state
 * @param {function} props.onChange input change event
 * @param {string} props.label input label
 */
export default function InputCheckbox ({ children, checked, onChange, label="", ...props }) {
  return (
    <label className="checkbox" {...props}>
      <input 
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <p>
        {label}
        {children}
      </p>
    </label>
  )
}