import ReceiptImg from '../../assets/Receipt.svg';
import { Container, Conter } from './styles';

export function Receipt() {
  return (
    <Container>
      <img src={ReceiptImg} alt='Icone de cupom de pedido' />
      <Conter>
        <p>0</p>
      </Conter>
    </Container>
  );
}
