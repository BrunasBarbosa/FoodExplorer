import { HeaderUser } from '../../components/HeaderUser';
import { Section } from '../../components/Section';
import { Slogan } from '../../components/Slogan';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <HeaderUser />
      <Slogan />
      <Section title='Refeições'/>
      <Section title='Pratos principais'/>
      <Section title='Pratos principais'/>
    </Container>
  );
}