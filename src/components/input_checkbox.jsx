/**
 * InputCheckbox component
 * @param {object} props
 * @param {string} props.value input value
 * @param {function} props.onChange input change event
 * @param {string} props.label input label
 */
export default function InputCheckbox ({ checked, onChange, label, ...props }) {
  return (
    <label className="checkbox" {...props}>
      <input 
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <p>{label}</p>
    </label>
  )
}