import { Container } from './styles';

export function Select({ title, options }) {
  return (
    <Container >
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