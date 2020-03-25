import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
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
} from '../Register/styles';

import { FormInputArea } from './styles';

export default function NewIncident() {
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleSubmit({ title, description, value }) {
    try {
      await api.post(
        'incidents',
        { title, description, value },
        { headers: { Authorization: ongId } }
      );

      toast.success('Caso cadastrado com sucesso');
      history.push('/profile');
    } catch (err) {
      console.log(err);
      toast.error(
        'Não foi possível cadastrar o novo caso. Verifique seus dados'
      );
    }
  }

  return (
    <Container>
      <ContentContainer>
        <LeftContent>
          <LogoImage src={logoImg} alt="Be the hero" />
          <Title>Cadastrar novo caso</Title>
          <Text>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Text>
          <BackLink to="/profile">
            <LogInIcon size={16} color="#e02041" />
            Voltar para home
          </BackLink>
        </LeftContent>
        <RegisterForm onSubmit={handleSubmit}>
          <FormInput name="title" placeholder="Título do caso" />
          <FormInputArea name="description" placeholder="Descrição" />
          <FormInput name="value" placeholder="Valor em reais" />
          <FormButton title="Cadastrar" />
        </RegisterForm>
      </ContentContainer>
    </Container>
  );
}
