import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import screen from '../../themes/screens'

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    z-index: 9;

    &.active {
        background-color: var(--color-blue);
    }
    @media ${screen.md} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0.5rem;
        background-color: var(--color-blue);
    }
`
const Logo = styled.div`
    width: 12.5rem;
    padding: 1rem 0;
    text-align: left;
    cursor: pointer;
`
const Nav = styled.ul`
    width: 100%;
    text-align: right;
    padding: 0;
`
const MainNav = styled(Column)`
    background-color: none;

    @media ${screen.md} {
        position: fixed;
        top: 0;
        left: -25rem;
        padding: 2rem;
        width: 25rem;
        height: 100vh;
        z-index: 9;
        transition: left 0.25s ease-in-out;
        background-color: var(--color-white);
        box-shadow: 0.5rem 0 2rem rgba(0, 0, 0, 0.3);
        overflow: auto;

        &.active {
            left: 0;
        }
    }
`
const NavLink = styled.li`
    list-style-type: none;
    display: inline-block;
    text-align: left;
    margin: 0 1rem;
    color: var(--color-white);
    cursor: pointer;

    @media ${screen.md} {
        line-height: 3rem;
        color: var(--color-black);
        font-size: 1.6rem;
        display: block;
        margin: 1rem 0;

        &:hover {
            color: var(--color-blue);
        }
    }
`
const NavBtn = styled.div`
    display: none;

    @media ${screen.md} {
        display: block;
        position: fixed;
        top: 2rem;
        right: 2rem;
        height: 3rem;
        width: 3rem;
        padding: 0;
        cursor: pointer;
    }
`

const Header = () => {
    return (
        <StyledHeader id="header">
            <Container>
                Header
            </Container>
        </StyledHeader>
    )
}

export default Header
