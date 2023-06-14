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

export function Update() {
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
        <h1>Editar prato</h1>
        <section>
          <InputFile
            title='Imagem do prato'
            text='Selecione imagem'
          />

          <InputForm
            title='Nome'
            type='text'
            value='Salada César'
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
            placeholder='R$ 40,00'
          />
        </section>
        <Textarea
          title='Descrição'
          value='A Salada César é uma opção refrescante para o verão.'
        />

        <div className='buttons'>
          <Button className='delete' type='button' title='Excluir prato' />
          <Button className='submit' type='submit' title='Salvar alterações' />
        </div>
      </Main>

      <Footer />
    </Container>
  );
}