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
				'YOUR_SERVICE_ID', // ID сервиса
				'YOUR_TEMPLATE_ID', // ID шаблона
				formData,
				'YOUR_USER_ID' // ID пользователя
			)
			.then(
				() => {
					alert('Email sent successfully!')
				},
				(error) => {
					alert('Failed to send email.')
					console.error(error)
				}
			)
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
