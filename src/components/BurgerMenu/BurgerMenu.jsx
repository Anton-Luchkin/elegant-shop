import PropTypes from 'prop-types'
import s from './BurgerMenu.module.scss'

function BurgerMenu({ isActive, toggleMenu }) {
	return (
		<div>
			<button
				onClick={toggleMenu}
				className={`${s.burgerButton} visible-mobile ${
					isActive ? s.isActive : ''
				}`}
				type="button"
			>
				<span className={`visually-hidden`}>Open navigation menu</span>
			</button>

			<nav className={`${s.mobileOverlay} visible-mobile  ${
					isActive ? s.isVisible : ''
				}`}>
				<ul className={s.mobileOverlay__list}>
					<li onClick={toggleMenu} className={s.mobileOverlay__item}>
						<a href="#" className={s.mobileOverlay__link}>
							Home
						</a>
					</li>
					<li onClick={toggleMenu} className={s.mobileOverlay__item}>
						<a href="#about" className={s.mobileOverlay__link}>
							About
						</a>
					</li>
					<li onClick={toggleMenu} className={s.mobileOverlay__item}>
						<a href="#catalog" className={s.mobileOverlay__link}>
							Dress catalog
						</a>
					</li>
					<li onClick={toggleMenu} className={s.mobileOverlay__item}>
						<a href="#contacts" className={s.mobileOverlay__link}>
							Contacts
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

BurgerMenu.propTypes = {
	isActive: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired
}

export default BurgerMenu
