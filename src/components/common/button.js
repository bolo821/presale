import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#0091FF' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#ffffff' : '#000000')};
  font-size: ${({ fontBig }) => (fontBig ? '2.2rem' : '1.8rem')};
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 0px 10px 5px black;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ dark }) => (dark ? '#000000' : '#ffffff')};
    background: ${({ primary }) => (primary ? '#ffffff' : '#000000')};
  }
`;
