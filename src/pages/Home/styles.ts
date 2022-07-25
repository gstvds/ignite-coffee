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
`

export const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 34rem;
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(8px);
`
