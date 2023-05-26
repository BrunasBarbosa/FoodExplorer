import { DishesRepositoryInMemory, MainDishesRepositoryInMemory, MainDishesRepositoryInMemoryTwo } from '../../repositories/DishesRepositoryInMemory';

import { HeaderUser } from '../../components/HeaderUser';
import { Section } from '../../components/Section';
import { Counter } from '../../components/Counter';
import { Slogan } from '../../components/Slogan';
import { Footer } from '../../components/Footer';

import { VscHeart } from 'react-icons/vsc';

import { Container } from './styles';

export function Home() {

  return (
    <Container>
      <HeaderUser />
      <Slogan />

      <Section title='Refeições' data={DishesRepositoryInMemory} icon={VscHeart} children={<Counter title={'incluir'}/>} />
      <Section title='Pratos principais' data={MainDishesRepositoryInMemory} icon={VscHeart} children={<Counter title={'incluir'}/>} />
      <Section title='Pratos principais' data={MainDishesRepositoryInMemoryTwo} icon={VscHeart} children={<Counter title={'incluir'}/>} />

      <Footer />
    </Container>
  );
}

