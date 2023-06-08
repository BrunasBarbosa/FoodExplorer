import { Receipt } from '../../assets/icons/Receipt';
import { RxMinus, RxPlus } from 'react-icons/rx';

import { Button } from '../Button';
import { Container } from './styles';
import { useEffect, useState } from 'react';

export function Counter({ title, data, ...rest }) {
  const [amount, setAmount] = useState('01');
  const [screen, setScreen] = useState(window.innerWidth);
  const [text, setText] = useState('');

  function formatCounter(value) {
    return String(value).padStart(2, '0');
  }

  function handlePlusAmount() {
    setAmount(prevState => {
      const result = Number(prevState) + 1;
      return formatCounter(result);
    });
  }

  function handleMinusAmount() {
    const minAmount = Number(amount) === 1;

    if (minAmount) {
      return;
    }

    setAmount(prevState => {
      const result = Number(prevState) - 1;
      return formatCounter(result);
    });
  }

  useEffect(() => {
    if (screen < 700) {
      setText('pedir');
    } else {
      setText('incluir');
    }
  }, []);

  return (
    <Container className='counter' {...rest}>
      <div>
        <RxMinus onClick={handleMinusAmount} />
        <span>{amount}</span>
        <RxPlus onClick={handlePlusAmount} />
      </div>

      {
        data ? <Button className='button-details' icon={Receipt} title={`${text} ∙ R$  ${data}`} />
          :
          <Button title={title} />
      }

    </Container>
  );
}