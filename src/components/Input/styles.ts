import styled, { css } from 'styled-components'

export type InputSizes = 'small' | 'medium' | 'large'

interface InputContainerProps {
  inputSize: InputSizes
}

export const InputContainer = styled.div<InputContainerProps>`
  background: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 0.25rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  ${(props) =>
    props.inputSize === 'small' &&
    css`
      min-width: 3.75rem;
      max-width: 3.75rem;
    `}
  ${(props) =>
    props.inputSize === 'medium' &&
    css`
      width: 50%;
      min-width: 12.5rem;
    `}
  ${(props) =>
    props.inputSize === 'large' &&
    css`
      width: 100%;
    `}

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const CustomInput = styled.input`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 0.875rem;
  background: transparent;
  border: 0;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }

  &:focus {
    box-shadow: none;
    outline: 0;
  }
`

export const OptionalText = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors['base-label']};
`
