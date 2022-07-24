import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.background};

  display: flex;
  align-items: center;
  flex-direction: column;
`
export const LayoutContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin-top: 104px;
`
