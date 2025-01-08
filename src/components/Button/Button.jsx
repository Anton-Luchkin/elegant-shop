import PropTypes from 'prop-types'
import s from './Button.module.scss'

function Button({ text, style, type='button', onClick }) {
	return (
		<button className={`${s.button} ${style}`} type={type} onClick={onClick}>
			<span>{text}</span>
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	style: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func
}

export default Button
