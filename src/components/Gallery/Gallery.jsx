
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.scss'

const Gallery = ({ images }) => {
	const galleryItems = []
	images.map((item) => {
		let galleryItem = {}
		if (item.src) {
			galleryItem = {
				original: item.original,
				thumbnail: item.thumbnail,
				renderItem: () => (
					<video controls>
						<source src={item.src} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)
			}
			galleryItems.push(galleryItem)
			return
		}

		galleryItem = {
			original: item.original,
			thumbnail: item.thumbnail
		}
		galleryItems.push(galleryItem)
	})
	return (
		<div>
			<ImageGallery  items={galleryItems} autoPlay={false} showPlayButton={false} showThumbnails={false} showFullscreenButton={false}/>
		</div>
	)
}

Gallery.propTypes = {
	  images: PropTypes.arrayOf(
      PropTypes.shape({
        original: PropTypes.string.isRequired, 
        thumbnail: PropTypes.string.isRequired, 
        src: PropTypes.string, 
      })
    ).isRequired,
}

export default Gallery
