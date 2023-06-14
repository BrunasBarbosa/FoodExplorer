import { HeaderAdm } from '../../components/HeaderAdm';
import { InputForm } from '../../components/InputForm';
import { InputFile } from '../../components/InputFile';
import { Textarea } from '../../components/Textarea';
import { TagItem } from '../../components/TagItem';
import { Select } from '../../components/Select';
import { Return } from '../../components/Return';
import { Button } from '../../components/Button';
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
        <section>
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
        </section>

        <section className='large-section'>
          <div className='input-tags'>
            <label>Ingredientes</label>
            <div className='tags'>
              <TagItem
                isNew
                placeholder='Adicionar'
              />
              <TagItem
                value='Pão Naan'
              />
            </div>
          </div>

          <InputForm
            title='Preço'
            type='number'
            placeholder='R$ 00,00'
          />
        </section>

        <Textarea
          title='Descrição'
          placeholder='Fale brevemente sobre o prato, seus ingredientes e composição.'
        />

        <Button className='submit' type='submit' title='Salvar alterações' />
      </Main>

      <Footer />
    </Container>
  );
}