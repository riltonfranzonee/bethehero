import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: #e02041;
  border: 0;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
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
