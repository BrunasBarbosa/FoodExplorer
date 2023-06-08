import { Container } from './styles';

export function Button({ title, icon: Icon, loading = false, ...rest }) {
  return (
    <Container
      type='button'
      disable={loading ? 'Carregando...' : title}
      {...rest}
    > 
      {Icon && <Icon />}
      
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
