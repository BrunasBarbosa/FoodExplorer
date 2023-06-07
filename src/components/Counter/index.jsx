
import { RxMinus, RxPlus } from 'react-icons/rx';
import { ButtonDetails } from '../ButtonDetails';
import { Button } from '../Button';
import { Container } from './styles';
import { useState } from 'react';

export function Counter({ title, data, ...rest }) {
  const [amount, setAmount] = useState(1);
  let text = 'pedir';

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

      {
        data ? <ButtonDetails title={`${text} ∙ R$  ${data}`} />
          :
          <Button title={title} />
      }

    </Container>
  );
}