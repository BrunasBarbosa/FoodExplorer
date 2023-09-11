import { Upload } from '../../assets/icons/Upload';
import { Container } from './styles';
import { useRef } from 'react';

export function InputFile({ title, text, ...rest }) {
  const inputRef = useRef(null);

  function handleDivClick() {
    inputRef.current.click();
  };

  function handleUploadImage(event) {
    const file = event.target.files[0];

    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);

    setImage(imagePreview);
  }

  return (
    <Container onClick={handleDivClick}>
      <h3>{title}</h3>

      <label htmlFor='newDish'>
        <Upload />

        <input {...rest}
          id='image'
          title='Imagem do prato'
          type='file'
          placeholder='Selecione imagem'
          ref={inputRef}
          onChange={handleUploadImage}
        />
        {text}
      </label>
    </Container>
  );
}