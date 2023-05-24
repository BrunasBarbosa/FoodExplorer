import { HeaderUser } from '../../components/HeaderUser';
import { Logo } from '../../components/Logo';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <HeaderUser >
        <Logo />
        
      </HeaderUser>
    </Container>
  )
}