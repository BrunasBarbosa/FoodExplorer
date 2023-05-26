import { RxMinus, RxPlus } from 'react-icons/rx';
import { Button } from '../Button';
import { Container } from './styles';
import { useState } from 'react';

export function Counter({ title, ...rest }) {
  const [amount, setAmount] = useState(1);

  function handlePlusAmount() {
    return setAmount(prevState => prevState + 1);
  }

  function handleMinusAmount() {
    const minAmount = amount === 1;

    if (minAmount) {
      return;
    }

    return setAmount(prevState => prevState - 1);
  }

  return (
    <Container className='counter' {...rest}>
      <div>
        <RxMinus onClick={handleMinusAmount} />
        <span>0{amount}</span>
        <RxPlus onClick={handlePlusAmount} />
      </div>

      <Button title={title} />
    </Container>
  );
}