import { ButtonText } from '../../components/ButtonText';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Container, Form } from "./styles";

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  };

  return (
    <Container >
      <Logo />
      <Form>
        <h1>Faça login</h1>
        <InputForm
          title='Email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          type='email'
          onChange={e => setEmail(e.target.value)}
        />

        <InputForm
          title='Senha'
          placeholder='No mínimo 6 caracteres'
          type='password'
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Entrar' onClick={handleSignIn} />

        <Link to='/register'>
          <ButtonText title='Criar uma conta' />
        </Link>
      </Form>
    </Container>
  );
}