import React, { Component } from "react";
import PropTypes from 'prop-types';
import { List, Span } from './Statistics.styled';


export class Statistics extends Component {
  render() {
    const {good, neutral, bad, total, positivePercentage,} = this.props;
    return (
			<List>
          <li>Good
            <Span>{good}</Span>
          </li>
          <li>Neutral
            <Span>{neutral}</Span>
          </li>
          <li>Bad
            <Span>{bad}</Span>
          </li>
          <li>Total
            <Span>{total}</Span>
          </li>
          <li>Positive feedback
            <Span>{positivePercentage || 0}%</Span>
          </li>
        </List>
		)
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired, 
	neutral: PropTypes.number.isRequired, 
	bad: PropTypes.number.isRequired, 
	total: PropTypes.number.isRequired, 
	positivePercentage: PropTypes.number.isRequired,
}