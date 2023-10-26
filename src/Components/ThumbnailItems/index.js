import './index.css'

const ThumbnailItems = props => {
  const {thumbnail, onClickMatch} = props
  const {thumbnailUrl, imageUrl} = thumbnail
  const onMatch = () => {
    onClickMatch(imageUrl)
  }

  return (
    <li className="thumbnail-list">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="t-images"
        onClick={onMatch}
      />
    </li>
  )
}
export default ThumbnailItems
