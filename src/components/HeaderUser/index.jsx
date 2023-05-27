import Menu from '../../assets/icons/Menu.svg';
import { Container } from './styles';
import { Receipt } from '../Receipt';
import { Logo } from '../Logo';
import { useNavigate } from 'react-router-dom';

export function HeaderUser() {
  const navigate = useNavigate();

  function HandleOpenMenu() {
    return navigate('/menu');
  }

  return (
    <Container>
      <img src={Menu} alt='Icone de barra de menu' onClick={HandleOpenMenu} />
      <Logo />
      <Receipt />
    </Container>
  );
}
