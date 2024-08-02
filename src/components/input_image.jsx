import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


/**
 * InputImage component with image preview
 * @param {Object} props - Component props
 * @param {String} props.name - Input name
 * @param {String} props.imageSrc - Image source URL
 * @param {Function} props.onChange - Input change function
 * @param {String} props.label - Input label text
 * @param {String} props.warning - Input warnning text
 * @param {Boolean} props.required - Input required
 * @returns {JSX.Element} InputImage component
 */
export default function InputImage({ name, imageSrc, onChange, label, warning = "", required = true }) {

  return (
    <div className="input-image">
      <label>
        <p>
          {label}
        </p>

        {/* Content before image */}
        {
          imageSrc
            ?
            (
              <img
                src={imageSrc}
                width={200}
                height={200}
              />
            )
            :
            (
              <>
                <svg
                  viewBox="0 0 24 24"
                >
                  <path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm-.747 9.25h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" />
                </svg>
              </>
            )

        }
        <input
          type="file"
          accept="image/png, image/svg+xml"
          onChange={onChange}
          id={name}
          name={name}
          required={required}
        />
      </label>
      <p className="warning">
        {warning}
      </p>
    </div>
  )
}