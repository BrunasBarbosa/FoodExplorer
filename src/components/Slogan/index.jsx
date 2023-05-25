import Macarons from '../../assets/pngegg2.svg';
import { Container } from './styles';

export function Slogan() {
  return (
    <Container >
      <img src={ Macarons } alt='Imagem de macarons e frutas vermelhas'/>
      <div>
        <h2>Sabores inigualáveis</h2>
        <p>
          Sinta o cuidado do preparo com ingredientes selecionados.
        </p>
      </div>
    </Container>
  );
}