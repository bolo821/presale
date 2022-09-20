import React from 'react'
import styled, { css } from 'styled-components'
import screen from '../../themes/screens'

const createElement = React.createElement

const BaseElement = css`
    text-align: ${props => props.align || 'left'};

    /* prettier-ignore */
    color: ${props => props.color || 'black'};
`
export const Text = styled.p`
    font-weight: ${props => props.weight || '400'};
    font-size: ${props => props.size || '1.6rem'};
    line-height: ${props => props.lh || '1.5'};
    margin: ${props => props.margin || '0'};
    ${BaseElement}
`

export const LinkText = styled.a`
    /* prettier-ignore */
    color: ${props => props.color || '#ffffff'});
    font-size: ${props => props.size || '1.6rem'};
    line-height: ${props => props.lh || '1.5'};

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const Header = styled(({ as = 'h1', children, ...props }) =>
    createElement(as, props, children),
)`
    font-weight: ${props => props.weight || 'bold'};
    font-size: ${props => {
        if (props.as === 'h1') return 'var(--text-size-xxl)'
        if (props.as === 'h2') return 'var(--text-size-xl)'
        if (props.as === 'h3') return 'var(--text-size-lg)'
        if (props.as === 'h4') return 'var(--text-size-md)'
        if (props.as === 'h5') return 'var(--text-size-sm)'
        if (props.as === 'h6') return 'var(--text-size-xxs)'
        if (props.font_size) return props.font_size
    }};

    @media ${screen.md} {
        font-size: ${props => {
            if (props.as === 'h1') return 'var(--text-size-xl)'
            if (props.as === 'h2') return 'var(--text-size-lg)'
            if (props.as === 'h3') return 'var(--text-size-md)'
            if (props.as === 'h4') return 'var(--text-size-sm)'
            if (props.font_size) return props.font_size
        }};
    }

    line-height: ${props => props.lh || '1.25'};
    margin: ${props => props.margin || '0'};
    ${BaseElement}
    width: 100%;
    @media ${screen.sm} {
        text-align: ${props => props.mobile_text_align || props.align};
    }
`
