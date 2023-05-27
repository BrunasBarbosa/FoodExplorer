import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { InputForm } from '../../components/InputForm';
import { Logo } from '../../components/Logo';
import { Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container >
      <Logo />
      <Form>
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
          title='Entrar'
        />

        <ButtonText
          title='Criar uma conta'
        />
      </Form>
    </Container>
  );
}