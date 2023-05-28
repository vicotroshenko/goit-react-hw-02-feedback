import styled from 'styled-components';

export const ButtonStatus = styled.button`
	background-color: white;
	padding: 5px;
	margin: 5px;
	border-radius: 10px;
	border: none;
	box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
	transition: all 100ms linear;
	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
	}
	&:active {
		background-color: grey;
		color: white;
	}
`;