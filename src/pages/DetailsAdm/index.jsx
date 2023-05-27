import { DishesRepositoryInMemory, MainDishesRepositoryInMemory, MainDishesRepositoryInMemoryTwo } from '../../repositories/DishesRepositoryInMemory';

import { HeaderAdm } from '../../components/HeaderAdm';
import { DataDish } from '../../components/DataDish';
import { Button } from '../../components/Button';
import { Return } from '../../components/Return';
import { Footer } from '../../components/Footer';

import { useParams } from 'react-router-dom';

import { Container, Content } from './styles';

export function DetailsAdm() {
  const params = useParams();

  function findById() {
    const response = DishesRepositoryInMemory.find(dish => dish.id === params.id);

    return response;
  }

  const data = findById();

  return (
    <Container>
      <HeaderAdm />
      <Content >
        <Return />
        <DataDish data={{
          image: data.image,
          name: data.name,
          description: data.description,
          tags: data.tags
        }} />

        <Button title='Editar prato' />
      </Content>

      <Footer />
    </Container>
  );
}