import { Container } from './styles';

export function Textarea({ title, placeholder, value, ...rest }) {
  return (
    <Container {...rest}>
      <label>{title}</label>
      <textarea name="" id="" placeholder={placeholder} defaultValue={value}></textarea>
    </Container>
  );
}