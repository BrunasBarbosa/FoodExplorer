import { useState } from 'react';
import { Receipt } from '../../assets/icons/Receipt';
import { Container, Counter } from './styles';

export function ReceiptCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <Receipt alt='Icone de cupom de pedido' />
      <Counter>
        <span>Pedidos (</span> {counter} <span>)</span>
      </Counter>
    </Container>
  );
}
