import styled from 'styled-components';

const ButtonLarge = styled.button`
  background-color: ${props => props.theme.colors.blue};
  color: white;
  font-size: 1rem;
  padding: 0.4em 1.5em;
  border: none;
  border-radius: 0.9em;
  width: 100%;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export default ButtonLarge;
