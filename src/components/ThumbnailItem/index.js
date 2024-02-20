import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickThumbnail} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickImage = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-image-list-container">
      <button className="thumbnail-btn" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} className="thumbnail-image" alt=" thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailItem
