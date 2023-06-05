import { Receipt } from '../../assets/icons/Receipt';
import { Container, Counter } from './styles';

export function ReceiptCounter() {
  return (
    <Container>
      <Receipt alt='Icone de cupom de pedido' />
      <Counter>
        <span>0</span>
      </Counter>
    </Container>
  );
}
