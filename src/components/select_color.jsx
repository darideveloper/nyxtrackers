import Select from 'react-select'


/**
 * Select color component (for set and logo colors)
 * @param {Object} props - Component props
 * @param {String} props.value - Selected color value
 * @param {String} props.label - Color label
 * @param {Array} props.options - Color options
 * @param {Array} props.options[].label - Color label
 * @param {Array} props.options[].value - Color value
 * @param {Function} props.onChange - Color change function
 * @returns {JSX.Element} SelectColor component
 */
export default function SelectColor ({ value, label, options, onChange}) {

  return (
    <div className="select-color-wrapper">
      <p>{label}</p>
      <Select
        className={`select small color ${value}`}
        value={{label: value, value: value}}
        options={options}
        onChange={onChange}
      />
    </div>
  )
}