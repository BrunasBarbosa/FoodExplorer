import { useState } from 'react';
import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  return (
    <Container className='input' style={focus ? {border: '1px solid white'} : {border: 'none'}}>
      {Icon && <Icon size={28} />}
      <input 
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
}

