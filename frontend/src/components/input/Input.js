import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	padding: 1.25rem;
	background: rgba(255, 255, 255, 0);
	justify-content: center;
	border-radius: 5px;
	height: 0.5rem;
	margin: 5px 20px;
	border: 1px solid white;
`;
