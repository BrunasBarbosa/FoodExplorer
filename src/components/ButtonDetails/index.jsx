import ReceiptImg from '../../assets/icons/Receipt.svg';

import { Container } from './styles';
import { Button } from '../Button';

export function ButtonDetails({ title }) {
  return (
    <Container>
      <img src={ReceiptImg} alt='Icone de cupom de pedido' />
      <Button title={title} />
    </Container>
  );
}