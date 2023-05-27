import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Container, Form, Field } from "./styles";

export function SignUp() {
  return (
    <Container >
      <Logo />
      <Form>
        <Field>
          <label>Seu nome</label>
          <Input
            placeholder='Exemplo: Maria da Silva'
            type='text'
          />
        </Field>

        <Field>
          <label>Email</label>
          <Input
            placeholder='Exemplo: exemplo@exemplo.com.br'
            type='email'
          />
        </Field>

        <Field>
          <label>Senha</label>
          <Input
            placeholder='No mínimo 6 caracteres'
            type='password'
          />
        </Field>

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