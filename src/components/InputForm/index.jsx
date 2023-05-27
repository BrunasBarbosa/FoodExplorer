import { Input } from '../Input';
import { Container } from './styles';

export function InputForm({ title, type, placeholder, ...rest }) {
  return (
    <Container >
      <label>{title}</label>
      <Input
        placeholder={placeholder}
        type={type}
      />
    </Container>
  );
}