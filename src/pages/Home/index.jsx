import { DishesRepositoryInMemory, MainDishesRepositoryInMemory, MainDishesRepositoryInMemoryTwo } from '../../repositories/DishesRepositoryInMemory';

import { HeaderUser } from '../../components/HeaderUser';
import { Section } from '../../components/Section';
import { Counter } from '../../components/Counter';
import { Slogan } from '../../components/Slogan';
import { Footer } from '../../components/Footer';
import { Heart } from '../../assets/icons/Heart';

import { Container, Content } from './styles';

export function Home() {

  return (
    <Container>
      <HeaderUser />

      <Content>
        <Slogan />

        <div className='section'>
          <Section
            title='Refeições'
            data={DishesRepositoryInMemory}
            icon={Heart}
            children={<Counter title={'incluir'} />}
          />
          <Section
            title='Sobremesas'
            data={MainDishesRepositoryInMemory}
            icon={Heart}
            children={<Counter title={'incluir'} />}
          />
          <Section
            title='Bebidas'
            data={MainDishesRepositoryInMemoryTwo}
            icon={Heart}
            children={<Counter title={'incluir'} />}
          />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}

