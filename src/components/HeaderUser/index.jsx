import { Logout } from '../../assets/icons/Logout';
import { Menu } from '../../assets/icons/Menu';
import { Container } from './styles';
import { ReceiptCounter } from '../ReceiptCounter';
import { Input } from '../Input';
import { Logo } from '../Logo';
import { IoSearchOutline } from 'react-icons/io5';

export function HeaderUser() {
  return (
    <Container>
      <Menu alt='Icone de barra de menu' />
      <Logo />
      <Input icon={IoSearchOutline} placeholder='Busque por pratos ou ingredientes' />
      <ReceiptCounter />
      <div>
        <Logout />
      </div>
    </Container>
  );
}
