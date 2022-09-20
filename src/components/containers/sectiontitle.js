
import styled from 'styled-components'

export const SectionTitle = styled.h1`
  font-size: ${props => props.size || '6rem'};
  font-weight: ${props => props.weight || '900'};
  color: ${props => props.color || 'black'};
  line-height: ${props => props.lh || '1.5'};
  margin: ${props => props.margin || '0  0 4rem'};;
  text-align: ${props => props.align || 'center'};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.color || 'black'};
  text-align: ${props => props.align || 'center'};
`;

export const SectionIntro = styled.p`
  font-size: 1.8rem;
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || '#000000'};
  text-align: ${props => props.align || 'center'};
  margin: 0 0 4rem;
`;