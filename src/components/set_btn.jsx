/**
 * SetBtn component
 * @param {string} props - The props of the component
 * @param {string} props.name - The name of the set
 * @param {string} props.color - The color of the set
 * @param {number} props.points - The points of the set
 * @param {number} props.price - The price of the set
 * @param {boolean} props.recommended - If the set is recommended
 * @param {function} props.onClick - The function to call when the button is clicked
 * @param {boolean} props.selected - If the set is selected *  
 * @returns {React.Component} - The SetBtn component
 */
export default function SetBtn ({name, color, points, price, recommended, onClick, selected}) {
  return (
    <div
      className={`set-option ${selected ? 'selected' : ''}`}
      role="button"
      onClick={onClick}
    >
      <img src={`/sets/${name} ${color}.webp`} />
      <div className="info">
        <h3>{name}</h3>
        <p className='points'>{points} points</p>
        <p className='price'>+${price} USD</p>
        {
          recommended
          &&
          <p className='tag'>Recommended</p>
        }
      </div>
    </div>
  )
}