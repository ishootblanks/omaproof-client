import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
  font-size: 1rem;
  padding: 0.4em 1.5em;
  border: none;
  border-radius: 0.9em;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export default Button;
