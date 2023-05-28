import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ButtonStatus } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
	options,
	onLeaveFeedback,
}) => {
	return (<>
			{options.map(btnName => (
			<ButtonStatus key={nanoid()} type="button" onClick={onLeaveFeedback} name={btnName}>{btnName}</ButtonStatus>
		))}
	</>)
}
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
}