import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormContainer = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const LogoImage = styled.img``;

export const LoginForm = styled(Form)`
  margin-top: 100px;
`;

export const FormTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const FormInput = styled(Input)``;

export const HeroesImage = styled.img``;

export const RegisterLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogInIcon = styled(FiLogIn)`
  margin-right: 10px;
`;
