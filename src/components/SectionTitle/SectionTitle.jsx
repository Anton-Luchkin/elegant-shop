import PropTypes from 'prop-types'
import s from './SectionTitle.module.scss'

function SectionTitle({ title }) {
	return <h2 className={s.section__title}>{title}</h2>
}

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired
}

export default SectionTitle
