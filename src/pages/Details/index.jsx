import { DishesRepositoryInMemory, MainDishesRepositoryInMemory, MainDishesRepositoryInMemoryTwo } from '../../repositories/DishesRepositoryInMemory';
import ReceiptImg from '../../assets/icons/Receipt.svg';

import { HeaderUser } from '../../components/HeaderUser';
import { DataDish } from '../../components/DataDish';
import { Counter } from '../../components/Counter';
import { Return } from '../../components/Return';
import { Footer } from '../../components/Footer';

import { useParams } from 'react-router-dom';

import { Container } from './styles';

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
      <Return />
      <DataDish data={{
        image: data.image,
        name: data.name,
        description: data.description,
        tags: data.tags
      }} />

      <Counter  title={'pedir ∙ R$ 25,00'} children={ReceiptImg}/>

      <Footer />
    </Container>
  );
}