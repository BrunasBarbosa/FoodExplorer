import Menu from '../../assets/icons/Menu.svg';
import { Container, Content } from './styles';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo';

export function HeaderAdm() {
  const navigate = useNavigate();

  function HandleOpenMenu() {
    return navigate('/menu');
  }

  return (
    <Container>
      <img src={Menu} alt='Icone de barra de menu' onClick={HandleOpenMenu} />
      
      <Content >
        <Logo />
        <span>admin</span>
      </Content>
    </Container>
  );
}
