
import SectionTitle from '../SectionTitle/SectionTitle'
import s from './About.module.scss'

function About() {
	return (
		<section className={s.about} id="about">
			<div className={`${s.about__container} container`}>
				<SectionTitle title={"About"} />
				<p className={s.about__subtitle}>
					We Create <span className={s.accent}>Awesome</span> Stuff
				</p>
				<p className={s.about__text}>
					We are Creative Team. Welcome to our wedding website! We are a team of
					like-minded enthusiasts united by a passion for beauty and style.

					Here, we have gathered the best and latest designs of wedding dresses,
					offering them to you at pleasant and affordable prices.

					Let us help make your special day truly unforgettable with the perfect
					dress of your dreams.
				</p>
			</div>
		</section>
	)
}

export default About
