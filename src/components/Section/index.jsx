import { Container } from './styles';
import { Card } from '../Card';

export function Section({ title, data }) {

  return (
    <Container>
      <h3>{title}</h3>

      <div>
        <Card
          data={['Salada Ravanello', '49,97']}
        />
        <Card
          data={['Salada Ravanello', '49,97']}
        />
        <Card
          data={['Salada Ravanello', '49,97']}
        />
      </div>


    </Container>
  );
}