import { Container } from './styles';

export function Textarea({ title, placeholder, value, ...rest }) {
  return (
    <Container {...rest}>
      <label>{title}</label>
      <textarea name="" id="" defaultValue={placeholder || value}></textarea>
    </Container>
  );
}