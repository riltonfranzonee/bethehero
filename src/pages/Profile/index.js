import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import {
  Container,
  Header,
  LogoImage,
  GreetingText,
  LinkButton,
  LogoutButton,
  PageTitle,
  CasesList,
  CaseItem,
  CaseInfo,
  DeleteButton,
  EmptyContainer,
  EmptyImage,
} from './styles';

import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';

export default function Profile() {
  const history = useHistory();

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('profile', {
        headers: { Authorization: ongId },
      });

      setIncidents(response.data);
    }

    loadIncidents();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { Authorization: ongId },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));

      toast.success('Caso deletado com sucesso');
    } catch (err) {
      toast.error('Não foi possível deletar o caso');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <Header>
        <LogoImage src={logoImg} alt="Be The Hero" />
        <GreetingText>Bem vinda, {ongName}</GreetingText>
        <LinkButton to="/incidents/new">Cadastrar novo caso</LinkButton>
        <LogoutButton type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </LogoutButton>
      </Header>
      <PageTitle>
        {incidents.length >= 1
          ? 'Casos cadastrados'
          : 'Por enquanto não temos nada aqui'}
      </PageTitle>
      <CasesList>
        {incidents.length >= 1
          ? incidents.map((incident) => (
              <CaseItem key={incident.id}>
                <CaseInfo>
                  <strong>Caso:</strong>
                  <p>{incident.title}</p>
                </CaseInfo>
                <CaseInfo>
                  <strong>Descrição:</strong>
                  <p>{incident.description}</p>
                </CaseInfo>
                <CaseInfo>
                  <strong>Valor:</strong>
                  <p>
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(incident.value)}
                  </p>
                </CaseInfo>
                <DeleteButton
                  type="button"
                  onClick={() => handleDelete(incident.id)}
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </DeleteButton>
              </CaseItem>
            ))
          : null}
      </CasesList>
      {incidents.length === 0 && (
        <EmptyContainer>
          <EmptyImage src={heroImg} />
        </EmptyContainer>
      )}
    </Container>
  );
}
