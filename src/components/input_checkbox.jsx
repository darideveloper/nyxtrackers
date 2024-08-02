/**
 * InputCheckbox component
 * @param {object} props
 * @param {string} props.value input value
 * @param {function} props.onChange input change event
 * @param {string} props.label input label
 */
export default function InputCheckbox ({ checked, onChange, label }) {
  return (
    <label className="checkbox">
      <input 
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <p>{label}</p>
    </label>
  )
}