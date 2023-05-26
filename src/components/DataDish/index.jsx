import { Tag } from '../Tag';

import { Container, Content } from './styles';

export function DataDish({ data }) {
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
          <div >
            {data.tags.map((tag, index) => <Tag key={index} title={tag.name} />)}
          </div>
        }
      </Content>
    </Container>
  );
}