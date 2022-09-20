import styled from 'styled-components'
import screen from '../../themes/screens'

const Container = styled.div`
    width: 100%;
    padding: ${props => props.padding || '0 1.5rem'};
    margin-right: auto;
    margin-left: auto;
    height: ${props => props.height || '100%'};
    background-color: ${props => props.bg || 'transparent'};

    @media ${screen.xxl} {
        max-width: 1680px;
    }
    @media ${screen.xl} {
        max-width: 1024px;
    }
    @media ${screen.lg} {
        max-width: 960px;
    }
    @media ${screen.md} {
        max-width: 720px;
    }
    @media ${screen.sm} {
        max-width: 540px;
    }
`

export const SectionContainer = styled.div`
    width: 100%;
    height: ${props => props.height || '100%'};
    padding: ${props => props.padding || '6rem 0'};
    margin: ${props => props.margin || '0'};
    background-color: ${props => props.bg || 'transparent'};
`

export default Container
