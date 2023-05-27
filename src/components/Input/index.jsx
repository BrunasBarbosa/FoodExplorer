import { Container } from './styles';

export function Input({ title, icon: Icon, ...rest }) {
  return (
    <Container>
      {title && <label >{title}</label>}
      {Icon && <Icon size={28} />}
      <input {...rest} />
    </Container>
  );
}

