/**
 * Basic input component
 * @param {Object} props - Component props
 * @param {String} props.type - Input type
 * @param {String} props.name - Input name
 * @param {String} props.label - Input label
 * @param {Boolean} props.hideLabel - Hide input label
 * @param {String} props.placeholder - Input placeholder
 * @param {Boolean} props.required - Input required
 * @param {String} props.value - Input value
 * @param {Function} props.onChange - Input change function
 * @param {Boolean} props.small - Small input
 * @returns {JSX.Element} Input component
 */
export default function Input({type, name, label, hideLabel, placeholder, required, value, onChange, small = false}) {

  const id = `input-${type}-${name}`

  return (
    <div className={`input-wrapper ${small ? 'small' : ''}`}>
      <label 
        htmlFor={id}
        className={hideLabel ? "hide" : ""}
      >
        {label}
      </label>
      <input 
        type={type} 
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}