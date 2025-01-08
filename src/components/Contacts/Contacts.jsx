import SectionTitle from '../SectionTitle/SectionTitle'
import EmailForm from '../EmailForm/EmailForm'

import s from './Contacts.module.scss'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/socials/facebook.svg'
import instagram from '../../assets/images/socials/instagram.svg'
import whatsApp from '../../assets/images/socials/whatsapp.svg'

function Contacts() {
	return (
		<section className={s.contacts} id="contacts">
			<div className={`${s.contacts__container} container`}>
				<SectionTitle title={'Contacts'} />
				<div className={s.contacts__wrapper}>
					<div className={s.contacts__socialsContainer}>
						<p className={s.contacts__socialTitle}>
							Join us on social networks:
						</p>
						<ul className={s.contacts__socialsList}>
							<li className={s.contacts__socialsItem}>
								<a
									href="#"
									className={`${s.contacts__socialsLink} hover-effect`}
								>
									<img src={facebook} alt="facebook-icon" />
									<span>Facebook</span>
								</a>
							</li>
							<li className={s.contacts__socialsItem}>
								<a
									href="#"
									className={`${s.contacts__socialsLink} hover-effect`}
								>
									<img src={instagram} alt="instagram-icon" />
									<span>Instagram</span>
								</a>
							</li>
							<li className={s.contacts__socialsItem}>
								<a
									href="#"
									className={`${s.contacts__socialsLink} hover-effect`}
								>
									<img src={whatsApp} alt="whatsApp-icon" />
									<span>WhatsApp</span>
								</a>
							</li>
						</ul>
						<a href="#" className={`${s.contacts__logo} hidden-mobile `}>
							<img src={logo} alt="logo" className={s.contacts__logoImg} />
							<p className={s.contacts__logoText}>
								Elegant <span className={`accent`}>Wedding</span> Dress
								<span className={`accent`}> Atelier</span>
							</p>
						</a>
					</div>
					<EmailForm />
				</div>
			</div>
		</section>
	)
}

export default Contacts
