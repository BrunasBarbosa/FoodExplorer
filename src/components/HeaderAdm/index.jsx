import { Logout } from '../../assets/icons/Logout';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../../assets/icons/Menu';
import { Button } from '../Button';
import { Input } from '../Input';

import { Container, Content } from './styles';
import { Logo } from '../Logo';

export function HeaderAdm() {
  const navigate = useNavigate();

  function handleNewDish() {
    return navigate('/new');
  }

  return (
    <Container>
      <Menu />

      <Content >
        <div className='logo'>
          <Logo />
          <span>admin</span>
        </div>

        <Input icon={IoSearchOutline} placeholder='Busque por pratos ou ingredientes' />

        <Button title='Novo prato' onClick={handleNewDish} />

        <div>
          <Logout />
        </div>
      </Content>
    </Container>
  );
}
