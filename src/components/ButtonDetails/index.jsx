import { Receipt } from '../../assets/icons/Receipt';

import { Container } from './styles';
import { Button } from '../Button';

export function ButtonDetails({ title }) {
  return (
    <Container>
      <Receipt alt='Icone de cupom de pedido' />
      <Button title={title} />
    </Container>
  );
}