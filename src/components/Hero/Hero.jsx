import Button from '../Button/Button'
import s from './Hero.module.scss'

function Hero() {
	return (
		<section className={s.hero}>
			<div className={`${s.hero__slideshow} hidden-mobile`}>
				<div className={s.hero__slideshowItem}>
					<img src="assets/images/hero/hero-1.jpg" alt="hero-img" />
				</div>
				<div className={s.hero__slideshowItem}>
					<img src="assets/images/hero/hero-2.jpg" alt="hero-img" />
				</div>
				<div className={s.hero__slideshowItem}>
					<img src="assets/images/hero/hero-33.jpg" alt="hero-img" />
				</div>
				<div className={s.hero__slideshowItem}>
					<img src="assets/images/hero/hero-4.jpg" alt="hero-img" />
				</div>
			</div>
			<div className={`${s.hero__slideshow} visible-mobile`}>
				<div className={s.hero__slideshowItem}>
					<img src="assets/images/hero/hero-1mob.jpg" alt="hero-img" />
				</div>
				<div className={s.hero__slideshowItem}>
					<img src="assets/images/hero/hero-2mob.jpg" alt="hero-img" />
				</div>
				<div className={s.hero__slideshowItem}>
					<img src="assets/images/hero/hero-3mob.jpg" alt="hero-img" />
				</div>
				<div className={s.hero__slideshowItem}>
					<img src="assets/images/hero/hero-4mob.jpg" alt="hero-img" />
				</div>
			</div>

			<div className={s.hero__titleContainer}>
				<div className={s.hero__content}>
					<p className={s.hero__subtitle}>We Are Worth Your Attention</p>
					<h1 className={s.hero__title}>Elegant Wedding <br /> Dress Shop</h1>
					<div className={s.hero__btnContainer}>
						<a href="#catalog">
							<Button text={'Go to Catalog'} style={`${s.hero__btnCatalog}`} />
						</a>
						<a href="#contacts">
							<Button text={'Contact Us'} style={`${s.hero__btnContact}`} />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
