import { VscHeart } from 'react-icons/vsc';
import { Container } from './styles';

export function Card({ data, children, icon: Icon }) {
  return (
    <Container className='card'>
      <img src={data.image} alt={`Imagem de ${data.name}`} />
      {Icon && <Icon />}

      <p>{data.name} {`>`}</p>
      <span>R$ {data.price}</span>

      {children && children}

    </Container>
  );
}