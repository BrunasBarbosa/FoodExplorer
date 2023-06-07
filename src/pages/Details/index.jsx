import { DishesRepositoryInMemory, MainDishesRepositoryInMemory, MainDishesRepositoryInMemoryTwo } from '../../repositories/DishesRepositoryInMemory';

import { HeaderUser } from '../../components/HeaderUser';
import { DataDish } from '../../components/DataDish';
import { Return } from '../../components/Return';
import { Footer } from '../../components/Footer';

import { useParams } from 'react-router-dom';

import { Container, Content } from './styles';

export function Details() {
  const params = useParams();

  function findById() {
    const response = DishesRepositoryInMemory.find(dish => dish.id === params.id);

    return response;
  }

  const data = findById();

  return (
    <Container>
      <HeaderUser />

      <Content >
        <Return />
        <DataDish data={{
          image: data.image,
          name: data.name,
          description: data.description,
          tags: data.tags,
          price: data.price
        }} />
      </Content>

      <Footer />
    </Container>
  );
}