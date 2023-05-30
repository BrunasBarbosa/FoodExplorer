import { Container } from './styles';

export function Textarea({ value, title, placeholder, ...rest }) {
  return (
    <Container {...rest}>
      <label>{title}</label>
      <textarea name="" id="" {...rest}>{placeholder || value}</textarea>
    </Container>
  );
}