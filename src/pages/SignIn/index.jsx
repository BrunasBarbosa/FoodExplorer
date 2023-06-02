import { ButtonText } from '../../components/ButtonText';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { Link } from 'react-router-dom';

import { Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container >
      <Logo />
      <Form>
        <h1>Faça login</h1>
        <InputForm
          title='Email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          type='email'
        />

        <InputForm
          title='Senha'
          placeholder='No mínimo 6 caracteres'
          type='password'
        />

        <Button title='Entrar' />

        <Link to='/register'>
          <ButtonText title='Criar uma conta' />
        </Link>
      </Form>
    </Container>
  );
}