import { Container } from './styles';
import PropTypes from 'prop-types';

export function Input({ title, ...rest }) {
  return (
    <Container>
      <label >{ title }</label>
      <input {...rest}/>
    </Container>
  )
}

Input.propTypes = {
  title: PropTypes.string,
}
