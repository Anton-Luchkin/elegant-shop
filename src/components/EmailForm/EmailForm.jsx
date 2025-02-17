import { useState } from 'react'
import emailjs from 'emailjs-com'
import Button from '../Button/Button'

import s from './EmailForm.module.scss'

const EmailForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		emailjs
		.send(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			formData,
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY
		)
		.then(
			(result) => {
				console.log("Email sent successfully:", result.text);
			},
			(error) => {
				console.error("Error sending email:", error);
			}
		);
	
	}

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<div className={s.form__control}>
				<label htmlFor="name" className={s.form__label}>
					Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className={s.form__input}
				/>
			</div>
			<div className={s.form__control}>
				<label htmlFor="email" className={s.form__label}>
					Email:
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					className={s.form__input}
				/>
			</div>
			<div className={s.form__control}>
				<label htmlFor="message" className={s.form__label}>
					Message:
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					className={s.form__textarea}
				></textarea>
			</div>
      <Button type="submit" text={'Send e-mail'} style={`${s.hero__btnContact}`} />
		</form>
	)
}

export default EmailForm
