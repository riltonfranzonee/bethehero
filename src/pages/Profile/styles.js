import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 64px;
`;

export const GreetingText = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const LinkButton = styled(Link)`
  width: 260px;
  height: 60px;
  background-color: #e02041;
  margin-left: auto;
  border: 0;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  line-height: 60px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(95%);
  }
`;

export const LogoutButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdcd6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`;

export const PageTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const CasesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;

export const CaseItem = styled.li`
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const CaseInfo = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 32px;
  }

  & strong {
    margin-bottom: 16px;
    display: block;
    color: #41414d;
    text-transform: uppercase;
  }

  & p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const EmptyContainer = styled.div`
  align-self: center;
`;

export const EmptyImage = styled.img``;
