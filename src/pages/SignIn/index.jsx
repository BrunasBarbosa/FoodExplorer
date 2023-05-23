import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container >
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

      </Form>
    </Container>
  );
}