import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { InputForm } from '../../components/InputForm';
import { Logo } from '../../components/Logo';
import { Container, Form } from "./styles";
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container >
      <Logo />
      <Form>
        <h1>Crie sua conta</h1>
        <InputForm
          title='Seu nome'
          placeholder='Exemplo: Maria da Silva'
          type='text'
        />

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
        <Button
          title='Criar conta'
        />

        <Link to="/">
          <ButtonText
            title='Já tenho uma conta'
          />
        </Link>
      </Form>
    </Container>
  );
}