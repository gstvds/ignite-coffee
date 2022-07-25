import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeContent = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  max-width: 70rem;
  flex-direction: column;
`

export const HeroBackground = styled.div`
  position: absolute;
  top: 104px;
  width: 100%;
  height: 100%;
  max-height: 34rem;
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(8px);
`

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`

export const Coffees = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
