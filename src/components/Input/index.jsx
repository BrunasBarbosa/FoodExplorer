import { useEffect } from 'react';
import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container className='input'>
      {Icon && <Icon size={28} />}
      <input {...rest} />
    </Container>
  );
}

