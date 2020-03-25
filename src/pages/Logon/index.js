import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import Button from '../../components/FormButton';

import {
  Container,
  FormContainer,
  LogoImage,
  LoginForm,
  FormTitle,
  FormInput,
  HeroesImage,
  RegisterLink,
  LogInIcon,
} from './styles';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const history = useHistory();

  async function handleLogin({ id }) {
    try {
      const response = await api.post('sessions', { id });

      const { name } = response.data;

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', name);

      history.push('/profile');
    } catch (err) {
      toast.error('Falha no login. Tente novamente');
    }
  }
  return (
    <Container>
      <FormContainer>
        <LogoImage src={logoImg} alt="Be the hero" />
        <LoginForm onSubmit={handleLogin}>
          <FormTitle>Faça seu logon</FormTitle>
          <FormInput placeholder="Sua ID" name="id" />
          <Button title="Entrar" />
          <RegisterLink to="/register">
            <LogInIcon size={16} color="#e02041" />
            Não tenho cadastro
          </RegisterLink>
        </LoginForm>
      </FormContainer>
      <HeroesImage src={heroesImg} alt="Heroes" />
    </Container>
  );
}
