import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Gallery from '../Gallery/Gallery'
import s from './CatalogItem.module.scss'

function CatalogItem({ title, collection, url, images, price }) {
	const [isGalleryOpen, setIsGalleryOpen] = useState(false)

	const openGallery = () => {
		setIsGalleryOpen(true)
	}
	const closeGallery = () => setIsGalleryOpen(false)

	return (
		<div className={s.catalogItem}>
			<img className={s.img} src={url} alt={title} />
			<div className={s.overlay}>
				<h3 className={s.title}>{title}</h3>
				<p className={s.collection}>Collection: {collection}</p>
				<p className={s.price}>Price: {price}</p>
				<Button text={'Show more'} onClick={openGallery} />
			</div>

			{isGalleryOpen && (
				<div className={s.galleryModal}>
					<div className={s.galleryBackdrop} onClick={closeGallery}></div>
					<div className={s.galleryContent}>
						<button className={s.closeButton} onClick={closeGallery}>
							&times;
						</button>
						<Gallery images={images} />
					</div>
				</div>
			)}
		</div>
	)
}

CatalogItem.propTypes = {
	title: PropTypes.string.isRequired,
	collection: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(
		PropTypes.shape({
			original: PropTypes.string.isRequired,
			thumbnail: PropTypes.string.isRequired,
			src: PropTypes.string
		})
	).isRequired,
	price: PropTypes.string.isRequired
}

export default CatalogItem
