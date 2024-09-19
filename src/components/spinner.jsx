/**
 * Loading spinner
 * @param {object} props - The props of the component
 * @param {boolean} props.isLoading - If the spinner is active
 * @param {boolean} props.small - If the spinner is small
 * @returns {React.Component} - The Spinner component
 */
export default function Spinner ({isLoading, small}) {
  return (
    <div className={`spinner ${isLoading ? 'active' : ''} ${small ? 'small' : ''}`}>
      <img 
        src="/loading.gif"
      />
    </div>
  )
}