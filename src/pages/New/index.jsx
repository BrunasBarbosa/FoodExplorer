import { HeaderAdm } from '../../components/HeaderAdm';
import { InputForm } from '../../components/InputForm';
import { InputFile } from '../../components/InputFile';
import { Textarea } from '../../components/Textarea';
import { TagItem } from '../../components/TagItem';
import { Select } from '../../components/Select';
import { Return } from '../../components/Return';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Container, Main } from './styles';
import { api } from '../../services/api';
import { useState } from 'react';
// import dishPlaceholder from '../../assets/dishes/recipe-placeholder.svg';

export function New() {

  // const imageURL = dish.image ? `${api.defaults.baseURL}files/${dish.avatar}` : dishPlaceholder;
  // const [image, setImage] = useState(imageURL);
  // const [imageFile, setImageFile] = useState(null);



  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  function handleBack() {
    return navigate(-1);
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleNewDishe() {
    if (!name) {
      return alert('Você não inseriu um nome ao prato.');
    }

    if (newIngredient) {
      return alert('Você não salvou os dados inseridos nos marcadores, complete a ação ou remova os dados.');
    }

    await api.post('/dishes', {
      name,
      description,
      price,
      category,
      ingredients
    });

    alert('Prato cadastrado com sucesso.');
    handleBack();
  }

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
            onChange={e => setName(e.target.value)}
          />

          <Select title='Categoria' onChange={e => setCategory(e.target.value)} />
        </section>

        <section className='large-section'>
          <div className='input-tags'>
            <label>Ingredientes</label>
            <div className='tags'>
              <TagItem
                isNew
                placeholder='Adicionar'
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />

              {
                ingredients.map((ingredient, index) =>
                  <TagItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />)
              }
            </div>
          </div>

          <InputForm
            title='Preço'
            type='number'
            placeholder='R$ 00,00'
            onChange={e => setPrice(e.target.value)}
          />
        </section>

        <Textarea
          title='Descrição'
          placeholder='Fale brevemente sobre o prato, seus ingredientes e composição.'
          onChange={e => setDescription(e.target.value)}
        />

        <Button className='submit' type='submit' title='Salvar alterações' onClick={handleNewDishe} />
      </Main>

      <Footer />
    </Container>
  );
}