import Hero from '../Hero/Hero'
import About from '../About/About'
import Catalog from '../Catalog/Catalog'
import s from './Main.module.scss'

function Main() {
	return (
		<section className={s.main}>
			<Hero />
			<About />
			<Catalog />
		</section>
	)
}

export default Main
