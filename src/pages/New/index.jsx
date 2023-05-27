import { HeaderAdm } from '../../components/HeaderAdm';
import { InputForm } from '../../components/InputForm';
import { Textarea } from '../../components/Textarea';
import { Return } from '../../components/Return';
import { Footer } from '../../components/Footer';
import { Upload } from '../../assets/icons/Upload';
import { Container, Main } from './styles';

export function New() {
  return (
    <Container >
      <HeaderAdm />
      <Main >
        <Return />
        <h1>Novo prato</h1>

        <InputForm
          title='Imagem do prato'
          type='file'
          placeholder='Selecione imagem'
          icon={Upload}
        />

        <InputForm
          title='Nome'
          type='text'
          placeholder='Ex.: Salada Ceasar'
        />
      </Main>
    </Container>
  );
}