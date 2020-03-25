import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { FiArrowLeft } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 96px;
  background-color: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const LogoImage = styled.img``;

export const Title = styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;

export const FormInput = styled(Input)`
  margin-top: 8px;
`;

export const RegisterForm = styled(Form)`
  width: 100%;
  max-width: 450px;

  span {
    color: #e02041;
    padding-top: 10px;
    margin-left: 5px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & input + input {
    margin-left: 8px;
  }

  span {
    flex: 1 50%;
    font-size: 16px;
  }
`;

export const SmallInput = styled(Input)`
  margin-top: 8px;
  width: 80px;
`;

export const BackLink = styled(Link)`
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

export const LogInIcon = styled(FiArrowLeft)`
  margin-right: 10px;
`;
