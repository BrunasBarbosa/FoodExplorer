import { RiArrowLeftSLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export function Return() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container onClick={handleBack}>
      <RiArrowLeftSLine />
      voltar
    </Container>
  );
}