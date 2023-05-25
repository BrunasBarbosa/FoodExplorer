import ravanelloImg from '../../assets/dishes/ravanello.svg';
import gambeImg from '../../assets/dishes/gambe.svg';
import { Container } from './styles';
import { Card } from '../Card';

export function Section({ title, data }) {

  return (
    <Container>
      <h3>{title}</h3>

      <div>
        {
          data.length > 0 ?
            data.map((dishe, index) => (
              <Card
                key={String(index)}
                data={dishe}
              />
            ))
            :
            <Card />
        }
      </div>


    </Container>
  );
}