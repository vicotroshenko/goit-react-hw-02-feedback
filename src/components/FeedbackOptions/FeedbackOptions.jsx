import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ButtonStatus } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
	render() {
		const { options, onLeaveFeedback } = this.props;
		return (<>
			{options.map(btnName => (
			<ButtonStatus key={nanoid()} type="button" onClick={onLeaveFeedback} name={btnName}>{btnName}</ButtonStatus>
		))}
	</>)
	}
}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired),
	onLeaveFeedback: PropTypes.func.isRequired,
}