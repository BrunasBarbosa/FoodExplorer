import Menu from '../../assets/icons/Menu.svg';
import { Container } from './styles';
import { Receipt } from '../Receipt';
import { Logo } from '../Logo';

export function HeaderUser() {
  return (
    <Container>
      <img src={Menu} alt='Icone de barra de menu' />
      <Logo />
      <Receipt />
    </Container>
  );
}
