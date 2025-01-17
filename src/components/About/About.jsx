/* eslint-disable react/no-unescaped-entities */
import SectionTitle from '../SectionTitle/SectionTitle'
import s from './About.module.scss'

function About() {
	return (
		<section className={s.about} id="about">
			<div className={`${s.about__container} container`}>
				<SectionTitle title={'About'} />
				<p className={s.about__subtitle}>
					We Create <span className={s.accent}>Awesome</span> Stuff
				</p>
				<p className={s.about__text}>
					<span>We are Creative Team. Welcome to our wedding website!</span>
					<span>
						We are a team of like-minded enthusiasts united by a passion for
						beauty and style. Here, we have gathered the best and latest designs
						of wedding dresses, offering them to you at pleasant and affordable
						prices. Let us help make your special day truly unforgettable with
						the perfect dress of your dreams.
					</span>
					<span>
						We offer a reliable and secure payment system, PayPal, which is
						popular worldwide. This payment system guarantees a refund and
						blocks the Supplier’s bank account in case the ordered item (wedding
						dress) is not received or is of unsatisfactory quality or fit (or
						has other defects) due to the Supplier’s fault.
					</span>
					<span>
						Therefore, when you pay for your dream dress on our website, you can
						be absolutely calm and confident that our primary goal is to make
						our brides the most beautifully dressed and happiest.
					</span>
					<span>
						As a rule, we require a deposit of only 30% of the cost of the
						selected dress model, and the remaining 70% is paid before the dress
						is shipped. We send photos and videos of the finished dress before
						shipping.
					</span>
					<span>
						You might say, "I want to try on the dress" — no problem... you will
						have up to 2 weeks after receiving your dress to try it on.
					</span>
					<span>
						We guarantee that each of our dresses is "Love at first sight."
					</span>
					<span>
						All dresses are sewn individually for each customer and are
						available in sizes corresponding to the presented size grid.
					</span>
					<img src="assets/images/sizes.jpg" alt="sizes" />
				</p>
			</div>
		</section>
	)
}

export default About
