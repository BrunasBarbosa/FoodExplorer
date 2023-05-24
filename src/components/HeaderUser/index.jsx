import Menu from '../../assets/Menu.svg';
import { Receipt } from '../Receipt';
import { Container } from './styles';

export function HeaderUser({ children }) {
  return (
    <Container>
      <img src={Menu} alt='Icone de barra de menu' />
      {children}
      <Receipt />
    </Container>
  );
}
