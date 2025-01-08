import { useState, useEffect } from 'react'

import BurgerMenu from '../BurgerMenu/BurgerMenu'
import logo from '../../assets/images/logo.svg'
import s from './Header.module.scss'

function Header() {
	const [isActive, setIsActive] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [activeMenuItem, setActiveMenuItem] = useState('Home')

	const toggleMenu = () => {
		setIsActive((prevState) => !prevState)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 767) {
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleMenuItemClick = (menuItem) => {
		setActiveMenuItem(menuItem)
	}

	return (
		<div className={s.header}>
			<div className={`${s.header__inner} container`}>
				<a href="#" className={s.header__logo}>
					<img src={logo} alt="logo" className={s.header__logoImg} />
					<p className={s.header__logoText}>
						Elegant <span className={`accent`}>Wedding</span> Dress
						<span className={`accent`}> Atelier</span>
					</p>
				</a>
				<nav className={`${s.header__nav} hidden-mobile`}>
					<ul className={s.header__navList}>
						<li
							className={`${s.header__navItem} ${
								activeMenuItem === 'Home' ? s.header__navItem__active : ''
							}`}
							onClick={() => handleMenuItemClick('Home')}
						>
							<a href="#" className={`${s.header__navLink} hover-effect`}>
								<span>Home</span>
							</a>
						</li>
						<li
							className={`${s.header__navItem} ${
								activeMenuItem === 'About' ? s.header__navItem__active : ''
							}`}
							onClick={() => handleMenuItemClick('About')}
						>
							<a href="#about" className={`${s.header__navLink} hover-effect`}>
								<span>About</span>
							</a>
						</li>
						<li
							className={`${s.header__navItem} ${
								activeMenuItem === 'Dress catalog'
									? s.header__navItem__active
									: ''
							}`}
							onClick={() => handleMenuItemClick('Dress catalog')}
						>
							<a
								href="#catalog"
								className={`${s.header__navLink} hover-effect`}
							>
								<span>Dress catalog</span>
							</a>
						</li>
						<li
							className={`${s.header__navItem} ${
								activeMenuItem === 'Contacts' ? s.header__navItem__active : ''
							}`}
							onClick={() => handleMenuItemClick('Contacts')}
						>
							<a
								href="#contacts"
								className={`${s.header__navLink} hover-effect`}
							>
								<span>Contacts</span>
							</a>
						</li>
					</ul>
				</nav>

				{isMobile && <BurgerMenu isActive={isActive} toggleMenu={toggleMenu} />}
			</div>
		</div>
	)
}

export default Header
