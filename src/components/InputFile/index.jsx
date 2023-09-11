// import dishPlaceholder from '../../assets/dishes/recipe-placeholder.svg';
import { Upload } from '../../assets/icons/Upload';
// import { api } from '../../services/api';
import { Container } from './styles';
import { useRef } from 'react';

export function InputFile({ title, text, onUpload, dish, ...rest }) {
  // const imageURL = dish.image ? `${api.defaults.baseURL}files/${dish.image}` : dishPlaceholder;

  // const [image, setImage] = useState(imageURL);
  // const [imageFile, setImageFile] = useState(null);

  const inputRef = useRef(null);

  function handleDivClick() {
    inputRef.current.click();
  };

  function handleUploadImage(event) {
    const file = event.target.files[0];

    onUpload(file);

    // setImageFile(file);

    // const imagePreview = URL.createObjectURL(file);

    // setImage(imagePreview);
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