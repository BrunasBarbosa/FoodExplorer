import { DishesRepositoryInMemory, MainDishesRepositoryInMemory, MainDishesRepositoryInMemoryTwo } from '../../repositories/DishesRepositoryInMemory';

import { HeaderUser } from '../../components/HeaderUser';
import { Section } from '../../components/Section';
import { Slogan } from '../../components/Slogan';
import { Footer } from '../../components/Footer';

import { Container } from './styles';

export function Home() {

  return (
    <Container>
      <HeaderUser />
      <Slogan />

      <Section title='Refeições' data={DishesRepositoryInMemory} />
      <Section title='Pratos principais' data={MainDishesRepositoryInMemory} />
      <Section title='Pratos principais' data={MainDishesRepositoryInMemoryTwo} />

      <Footer />
    </Container>
  );
}