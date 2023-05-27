import { HeaderMenu } from '../../components/HeaderMenu';
import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Container, Main } from './styles';
import { IoSearchOutline } from 'react-icons/io5';

export function MenuAdm() {
  return (
    <Container>
      <HeaderMenu />

      <Main>
        <Input icon={IoSearchOutline} placeholder='Busque por pratos ou ingredientes' />
        <ButtonText title='Sair' />
      </Main>

      <Footer />
    </Container>
  );
}