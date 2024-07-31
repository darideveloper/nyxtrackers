export default function Loading ({isLoading}) {
  return (
    <div className={`spinner ${isLoading ? 'active' : ''}`}>
      <img 
        src="/loading.gif"
      />
    </div>
  )
}