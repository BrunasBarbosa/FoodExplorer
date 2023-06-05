import { useEffect } from 'react';
import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  
  useEffect(() => {
    const container = document.querySelector('.input');
    
    function handleInputFocusIn() {
      return container.style.border = '1px solid white';
    }

    function handleInputFocusOut() {
      return container.style.border = 'none';
    }

    container.addEventListener('focusin', handleInputFocusIn);
    container.addEventListener('focusout', handleInputFocusOut);
  }, [])

  return (
    <Container className='input'>
      {Icon && <Icon size={28} />}
      <input {...rest} />
    </Container>
  );
}

