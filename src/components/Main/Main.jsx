import Hero from '../Hero/Hero'
import About from '../About/About'
import Catalog from '../Catalog/Catalog'
import Contacts from '../Contacts/Contacts'

import s from './Main.module.scss'

function Main() {
	return (
		<section className={s.main}>
			<Hero />
			<About />
			<Catalog />
			<Contacts />
		</section>
	)
}

export default Main
