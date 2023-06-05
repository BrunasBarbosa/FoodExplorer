import { Logout } from '../../assets/icons/Logout';
import { Menu } from '../../assets/icons/Menu';
import { Container } from './styles';
import { ReceiptCounter } from '../ReceiptCounter';
import { Input } from '../Input';
import { Logo } from '../Logo';
import { IoSearchOutline } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';

export function HeaderUser() {
  const navigate = useNavigate();

  function HandleOpenMenu() {
    return navigate('/menu');
  }

  return (
    <Container>
      <Menu alt='Icone de barra de menu' onClick={HandleOpenMenu} />
      <Logo />
      <Input icon={IoSearchOutline} placeholder='Busque por pratos ou ingredientes' />
      <ReceiptCounter />
      <div>
        <Logout />
      </div>
    </Container>
  );
}
