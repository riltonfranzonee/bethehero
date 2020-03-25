import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import FormButton from '../../components/FormButton';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import {
  Container,
  ContentContainer,
  LeftContent,
  LogoImage,
  Title,
  Text,
  BackLink,
  LogInIcon,
  FormInput,
  RegisterForm,
  InputGroup,
  SmallInput,
} from './styles';

export default function Register() {
  const history = useHistory();

  async function handleRegister({ name, email, whatsapp, city, uf }) {
    try {
      const response = await api.post('ongs', {
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      toast.error('Não foi possível registrar sua conta. Verifique seus dados');
    }
  }

  return (
    <Container>
      <ContentContainer>
        <LeftContent>
          <LogoImage src={logoImg} alt="Be the hero" />
          <Title>Cadastro</Title>
          <Text>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos na sua ONG.
          </Text>
          <BackLink to="/">
            <LogInIcon size={16} color="#e02041" />
            Já tenho uma conta
          </BackLink>
        </LeftContent>
        <RegisterForm onSubmit={handleRegister}>
          <FormInput name="name" placeholder="Nome da ONG" />
          <FormInput name="email" placeholder="E-mail" />
          <FormInput name="whatsapp" placeholder="Whatsapp" />
          <InputGroup>
            <FormInput name="city" placeholder="Cidade" />
            <SmallInput name="uf" placeholder="UF" />
          </InputGroup>
          <FormButton title="Cadastrar" type="submit" />
        </RegisterForm>
      </ContentContainer>
    </Container>
  );
}
