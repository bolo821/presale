import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Container from '../components/containers/container'
import { Text } from '../components/common/typography'
import screen from '../themes/screens'

const FooterSection = styled.footer`
    padding: 4rem 0;
    margin: 0;
    background-color: var(--color-blue);

    ${Text} {
        color: var(--color-white);
        font-size: 1.4rem;
    }
    @media ${screen.md} {
        text-align: center;
    }
`
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterSection>
        <Container>
           <Text>Footer</Text>
        </Container>
    </FooterSection>
  );
};

export default Footer;
