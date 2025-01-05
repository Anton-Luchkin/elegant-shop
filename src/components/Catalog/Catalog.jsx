import SectionTitle from '../SectionTitle/SectionTitle'

import catalogItems from '../../catalog-items'

import s from './Catalog.module.scss'
import CatalogItem from '../CatalogItem/CatalogItem'

function Catalog() {
	return (
		<section id="catalog" className={s.catalog}>
			<SectionTitle title={'Dress Catalog'} />
			<ul className={s.previewCatalog}>
				{catalogItems.map((item) => (
					<li key={item.id}>
						<CatalogItem
							title={item.title}
							description={item.description}
							collection={item.collection}
							url={item.url}
							images={item.images}
              video={item.video}
							price={item.price}
						/>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Catalog
