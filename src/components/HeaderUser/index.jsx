import { Logout } from '../../assets/icons/Logout';
import { Menu } from '../../assets/icons/Menu';
import { Container } from './styles';
import { ReceiptCounter } from '../ReceiptCounter';
import { Input } from '../Input';
import { Logo } from '../Logo';
import { IoSearchOutline } from 'react-icons/io5';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function HeaderUser() {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  return (
    <Container>
      <Menu alt='Icone de barra de menu' />
      <Logo />
      <Input icon={IoSearchOutline} placeholder='Busque por pratos ou ingredientes' />
      <ReceiptCounter />
      <div onClick={handleSignOut}>
        <Logout />
      </div>
    </Container>
  );
}
