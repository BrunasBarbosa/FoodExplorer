import { RxMinus, RxPlus } from 'react-icons/rx';
import { VscHeart } from 'react-icons/vsc';
import { Container } from './styles';
import { Button } from '../Button';
import { useState } from 'react';

export function Card({ data }) {

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
    <Container className='card'>
      <img src={data.image} alt={`Imagem de ${data.name}`} />
      <VscHeart />

      <p>{data.name} {`>`}</p>
      <span>R$ {data.price}</span>

      <div>
        <RxMinus onClick={handleMinusAmount} />
        <span>0{amount}</span>
        <RxPlus onClick={handlePlusAmount} />
      </div>

      <Button title='incluir' />
    </Container>
  );
}