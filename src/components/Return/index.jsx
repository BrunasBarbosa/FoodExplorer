import { ArrowLeft } from '../../assets/icons/ArrowLeft';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export function Return() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container onClick={handleBack} className='return'>
      <ArrowLeft />
      voltar
    </Container>
  );
}