import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export function Return() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container onClick={handleBack}>
      <SlArrowLeft />
      voltar
    </Container>
  );
}