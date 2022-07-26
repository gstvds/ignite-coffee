import { InputHTMLAttributes } from 'react'

import { InputSizes, InputContainer, OptionalText, CustomInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  inputSize?: InputSizes
}

export function Input({ optional, inputSize = 'large', ...rest }: InputProps) {
  return (
    <InputContainer inputSize={inputSize}>
      <CustomInput {...rest} />
      {optional && <OptionalText>Opcional</OptionalText>}
    </InputContainer>
  )
}
