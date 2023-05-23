import { Container } from './styles';
import PropTypes from 'prop-types';
export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      type='button'
      disable={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.string
}