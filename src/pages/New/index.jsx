import { HeaderAdm } from '../../components/HeaderAdm';
import { InputForm } from '../../components/InputForm';
import { InputFile } from '../../components/InputFile';
import { TagItem } from '../../components/TagItem';
import { Textarea } from '../../components/Textarea';
import { Select } from '../../components/Select';
import { Return } from '../../components/Return';
import { Footer } from '../../components/Footer';
import { Container, Main } from './styles';

export function New() {
  const options = [
    { value: 'Refeição' },
    { value: 'Bebida' },
    { value: 'Sobremesa' },
    { value: 'Sapato' },
    { value: 'Galinha' },
  ];
  return (
    <Container >
      <HeaderAdm />
      <Main >
        <Return />
        <h1>Novo prato</h1>

        <InputFile
          title='Imagem do prato'
          text='Selecione imagem'
        />

        <InputForm
          title='Nome'
          type='text'
          placeholder='Ex.: Salada Ceasar'
        />

        <Select title='Categoria' options={options} />

        <label>Ingredientes</label>
        <div className='tags'>
          <TagItem
            isNew
            placeholder="Adicionar"
          />
          <TagItem
            value="Adicionar"
          />
        </div>
      </Main>
    </Container>
  );
}