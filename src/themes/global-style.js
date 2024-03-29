import { createGlobalStyle } from 'styled-components'
import Reset from './reset'
import Variables from './variables'
import screen from './screens'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}

    * {
        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    html {
        font-size: 62.5%; /* 1rem = 10px */
        line-height: 1.8;
        height: 100%;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.8rem;
        font-weight: normal;
        line-height: 1.2;
        margin: 0;
        padding: 0;

        @media ${screen.lg} {
            font-size: 1.6rem;
            line-height: 1.8;
        }
    }
`

export default GlobalStyle
