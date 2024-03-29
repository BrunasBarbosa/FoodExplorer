import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { Counter } from '../Counter';
import { Tag } from '../Tag';

import { Container, Content } from './styles';

export function DataDish({ data }) {
  const navigate = useNavigate();

  function handleEdit() {
    console.log(data)
    return navigate(`/dish/${data.id}`)
  }

  return (
    <Container >
      <img src={data.image} alt={`Imagem de ${data.name}`} />

      <Content>
        <h1>{data.name}</h1>
        <p>
          {data.description}
        </p>

        {
          data.tags &&
          <div className='tags'>
            {data.tags.map((tag, index) => <Tag key={index} title={tag.name} />)}
          </div>
        }

        <Counter data={data.price} />
        <Button className='edit-button' title='Editar prato' onClick={handleEdit}/>
      </Content>

    </Container>
  );
}