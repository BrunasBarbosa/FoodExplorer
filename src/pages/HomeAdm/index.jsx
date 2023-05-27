import { DishesRepositoryInMemory, MainDishesRepositoryInMemory, MainDishesRepositoryInMemoryTwo } from '../../repositories/DishesRepositoryInMemory';

import { HeaderUser } from '../../components/HeaderUser';
import { Section } from '../../components/Section';
import { Slogan } from '../../components/Slogan';
import { Footer } from '../../components/Footer';

import { Pencil } from '../../assets/icons/Pencil';

import { Container } from './styles';

export function HomeAdm() {

  return (
    <Container>
      <HeaderUser />
      <Slogan />

      <Section
        title='Refeições'
        data={DishesRepositoryInMemory}
        icon={Pencil}
      />
      <Section
        title='Pratos principais'
        data={MainDishesRepositoryInMemory}
        icon={Pencil}
      />
      <Section
        title='Pratos principais'
        data={MainDishesRepositoryInMemoryTwo}
        icon={Pencil}
      />

      <Footer />
    </Container>
  );
}

