import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container >
      <Logo />
      <Form>
        <Input
          title='Email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          type='email'
        />

        <Input
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