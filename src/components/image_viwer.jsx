export default function ImageViwer({src, is_visible, onClick}) {

    return (
        <div
          className={`
            image-viewer
            ${is_visible ? 'visible' : 'hidden'}
          `}
          onClick={onClick}
        >
            <img src={src} alt="image"/>
        </div>
    )
}