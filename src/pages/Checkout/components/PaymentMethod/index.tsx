import { CreditCard, Bank, Money } from 'phosphor-react'
import { PaymentContainer } from './styles'

interface PaymentMethodProps {
  title: string
  onSelect: () => void
  selected?: boolean
  type?: 'credit_card' | 'debit_card' | 'money'
}

export function PaymentMethod({
  title,
  onSelect,
  selected = false,
  type = 'credit_card',
}: PaymentMethodProps) {
  return (
    <PaymentContainer selected={selected} onClick={onSelect}>
      {type === 'credit_card' && <CreditCard />}
      {type === 'debit_card' && <Bank />}
      {type === 'money' && <Money />}
      {title}
    </PaymentContainer>
  )
}
