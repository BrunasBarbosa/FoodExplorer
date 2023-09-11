import { Container } from './styles';

export function Select({ title }) {
  const options = [
    { value: 'Entradas' },
    { value: 'Prato principal' },
    { value: 'Sobremesa' },
    { value: 'Bebidas' },
  ];
  return (
    <Container>
      <label>{title}</label>
      <select title={title}>
        {options &&
          options.map((option, index) =>
            <option key={index}>{option.value}</option>)
        }
      </select>
    </Container>
  );
}