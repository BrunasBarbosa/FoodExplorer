import { Container } from './styles';

export function Select({ title, options }) {
  return (
    <Container >
      <label>{title}</label>
      <select>
        {options &&
          options.map((option, index) =>
            <option key={index}>{option.value}</option>)
        }
      </select>
    </Container>
  );
}