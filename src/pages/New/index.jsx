import { HeaderAdm } from '../../components/HeaderAdm';
import { Return } from '../../components/Return';
import { Textarea } from '../../components/Textarea';
import { Footer } from '../../components/Footer';

import { Container, Main } from './styles';

export function New() {
  return (
    <Container >
      <HeaderAdm />
      <Main >
        <Return />
        <h1>Novo prato</h1>
      </Main>
    </Container>
  );
}