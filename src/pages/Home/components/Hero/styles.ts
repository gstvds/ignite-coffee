import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3.5rem;
  padding: 5.75rem 0;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    color: ${(props) => props.theme.colors['base-title']};
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.25;
    line-height: 130%;
    margin-top: 1rem;
  }

  img {
    height: 22.5rem;
    width: 30rem;
  }
`

export const ItemsContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
`

interface ItemIconContainerProps {
  backgroundColor: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const ItemIconContainer = styled.div<ItemIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme.colors[props.backgroundColor]};

  svg {
    color: ${(props) => props.theme.colors.background};
  }
`
