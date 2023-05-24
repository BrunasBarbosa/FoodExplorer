import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Container, Form } from "./styles";

export function SignUp() {
  return (
    <Container >
      <Logo />
      <Form>
        <Input
          title='Seu nome'
          placeholder='Exemplo: Maria da Silva'
          type='text'
        />

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
          title='Criar conta'
        />

        <ButtonText 
          title='Já tenho uma conta'
        />
      </Form>
    </Container>
  );
}