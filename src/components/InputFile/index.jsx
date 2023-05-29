import { Upload } from '../../assets/icons/Upload';
import { Container } from './styles';

export function InputFile({ title, text, ...rest }) {
  return (
    <Container>
      <h3>{title}</h3>

      <label htmlFor='newDish'>
        <Upload />

        <input {...rest}
          title='Imagem do prato'
          type='file'
          placeholder='Selecione imagem'
        />
        {text}
      </label>
    </Container>
  );
}