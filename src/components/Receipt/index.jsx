import ReceiptImg from '../../assets/icons/Receipt.svg';
import { Container, Counter } from './styles';

export function Receipt() {
  return (
    <Container>
      <img src={ReceiptImg} alt='Icone de cupom de pedido' />
      <Counter>
        <span>0</span>
      </Counter>
    </Container>
  );
}
