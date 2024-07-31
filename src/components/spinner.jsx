/**
 * Loading spinner
 * @param {object} props - The props of the component
 * @param {boolean} props.isLoading - If the spinner is active
 * @returns {React.Component} - The Spinner component
 */
export default function Spinner ({isLoading}) {
  return (
    <div className={`spinner ${isLoading ? 'active' : ''}`}>
      <img 
        src="/loading.gif"
      />
    </div>
  )
}