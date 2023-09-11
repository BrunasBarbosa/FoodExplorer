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
      {...rest}
    >
      {Icon && <Icon data={data}/>}
      <div onClick={() => handleDetails(data.id)}>
        <img src={data.image} alt={`Imagem de ${data.name}`} />

        <p>{data.name} {`>`}</p>
        <p className='description'>{data.description}</p>
        <span>R$ {data.price}</span>
      </div>

      {children && children}
    </Container>
  );
}