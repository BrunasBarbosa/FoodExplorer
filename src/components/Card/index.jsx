import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function Card({ data, children, icon: Icon, ...rest }) {
  const navigate = useNavigate();

  function handleDetails(id) {
    return navigate(`/details/${id}`);
  }

  return (
    <Container
      className='card'
      onClick={() => handleDetails(data.id)}
      {...rest}
    >
      <img src={data.image} alt={`Imagem de ${data.name}`} />
      {Icon && <Icon />}

      <p>{data.name} {`>`}</p>
      <span>R$ {data.price}</span>

      {children && children}
    </Container>
  );
}