import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../assets/images/fxbox-wh.png';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#fff')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 990;
  transition: all 0.4s ease-in-out;
  box-shadow: ${({ scrollNav }) => (scrollNav ? '0px 0px 5px 1px black' : 'transparent')};

  &.a {
    color: ${({ scrollNav }) => (scrollNav ? '#000' : '#fff')};
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    background: #000000;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 100%;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 4rem;
  display: flex;
  align-items: center;
  margin-left: 0;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 5px 5px 10px black;

  img {
    max-width: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`

  font-size: 1.8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #0091FF;
    transition: all 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 1px solid #0091FF;
    color: #0091FF;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #03045E;
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffffff;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0091FF;
    box-shadow: 0px 0px 0px 1px #f2f2f2;
  }
`;


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
            <img src={HeaderLogo} alt="icon" width="180rem"/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='team'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Team
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='tokenomics'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Tokenomics
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='news'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  News
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='contact'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
