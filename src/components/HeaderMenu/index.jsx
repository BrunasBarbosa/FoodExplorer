import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function HeaderMenu() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container >
      <VscChromeClose onClick={handleBack} />
      <h1>Menu</h1>
    </Container>
  );
}