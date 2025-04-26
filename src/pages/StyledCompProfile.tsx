import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledCompProfile = () => {
  const [username, setUsername] = useState<string>("");
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const fetchGitHubProfile = async () => {
    if (!username) {
      setError("Insira o nome do usuário");
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfile(response.data);
      setError("");
    } catch (err) {
      setError("O usuário inserido não foi encontrado");
      setProfile(null);
    }
  };

  return (
    <Wrapper>
      <ProfileCard>
        <Title>Buscador de perfil do github</Title>

        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite o nome do usuário"
        />

        <Button onClick={fetchGitHubProfile}>
          Buscar
        </Button>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {profile && (
          <ProfileInfo>
            <Avatar src={profile.avatar_url} alt="Avatar" />
            <ProfileName>{profile.name}</ProfileName>
            <Bio>{profile.bio || "Sem descrição."}</Bio>
            <Repos>Repositórios: {profile.public_repos}</Repos>
          </ProfileInfo>
        )}
      </ProfileCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #042940;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ProfileCard = styled.div`
  background-color: #080808;
  max-width: 28rem;
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  color: white;
  background-color: #333;
  ::placeholder {
    color: #dbf227;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #dbf227;
  color: black;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.5s;
  &:hover {
    background-color: #9fc131;
  }
`;

const ErrorMessage = styled.p`
  color: #f56565;
  margin-top: 1rem;
  text-align: center;
`;

const ProfileInfo = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

const Avatar = styled.img`
  display: inline-flex;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ProfileName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #dbf227;
`;

const Bio = styled.p`
  margin-bottom: 0.5rem;
  color: white;
`;

const Repos = styled.p`
  color: white;
`;

export default StyledCompProfile;