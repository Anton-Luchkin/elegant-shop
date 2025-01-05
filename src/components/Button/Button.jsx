import PropTypes from 'prop-types'
import s from './Button.module.scss'

function Button({ text, style, onClick }) {
	return (
		<button className={`${s.button} ${style}`} onClick={onClick}>
			<span>{text}</span>
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	style: PropTypes.string,
	onClick: PropTypes.func
}

export default Button
