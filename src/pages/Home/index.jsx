import { HeaderUser } from '../../components/HeaderUser';
import { Slogan } from '../../components/Slogan';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <HeaderUser />
      <Slogan />
    </Container>
  )
}