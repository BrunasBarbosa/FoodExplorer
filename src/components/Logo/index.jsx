import polygon from '../../assets/Polygon1.svg'
import { Container } from './styles';

export function Logo() {
  return (
    <Container>
      <img src={polygon}/>
      <h1>food explorer</h1>
    </Container>
  );
}