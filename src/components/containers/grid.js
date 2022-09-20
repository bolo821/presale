import styled from 'styled-components'
import screen from '../../themes/screens'

const Grid = styled.div`
    margin: ${props => props.margin || '0'};
    display: grid;
    height: ${props => props.height || '100%'};
    grid-template-columns: ${props => props.columns || 'auto auto'};
    column-gap: ${props => props.columngap || '0'};
    row-gap: ${props => props.rowgap || '0'};
    align-items: ${props => props.align || 'center'};
    justify-items: ${props => props.justify || 'center'};
    background-color: ${props => props.bgcolor || 'none'};

    @media ${screen.lgx} {
        grid-template-columns: ${props => props.mobilecolumns || '1fr'};
        row-gap: ${props => props.mobilerowgap || '0'};
        align-items: stretch;
    }

    @media ${screen.md} {
        grid-template-columns: ${props => props.mobilecolumns || '1fr'};
        row-gap: ${props => props.mobilerowgap || '0'};
        align-items: stretch;
    }
`

export const Column = styled.div`
    padding: ${props => props.padding || '0'};
    background-color: ${props => props.bgcolor || 'none'};
    height: ${props => props.height || '100%'};

    img {
        max-width: 100%;
    }
`

export const LiquidGrid = styled.div`
    display: grid;
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    column-gap: ${props => props.columngap || '0'};
    row-gap: ${props => props.rowgap || '0'};
    background-color: ${props => props.bgcolor || 'none'};
    align-items: center;
    align-content; center;
    justify-content: center;
    border: 1px solid red;
`

export const LiquidColumn = styled.div`
    border: 1px solid blue;
    display: grid;
    margin: auto;
`

export default Grid
