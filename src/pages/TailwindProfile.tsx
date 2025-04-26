import React, { useState } from "react";
import axios from "axios";

const TailwindProfile = () => {
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
    <div className="bg-[#042940] flex flex-col items-center justify-center min h-screen">
        <div className="bg-[#080808] max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Buscador de perfil do github</h2>

        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#383434] w-full p-2 mb-4 border rounded-lg text-white"
            placeholder="Digite o nome do usuário"
        />

        <button
            onClick={fetchGitHubProfile}
            className="w-full bg-[#DBF227] hover:bg-[#9FC131] transition-all duration-500 text-black font-bold py-2 px-4 rounded"
        >
            Buscar
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {profile && (
            <div className="mt-6 text-center">
            <img
                src={profile.avatar_url}
                alt="Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-[#DBF227]">{profile.name}</h3>
            <p className="mb-2 text-white">{profile.bio || "Sem descrição."}</p>
            <p className="text-white">Repositórios: {profile.public_repos}</p>
            </div>
        )}
        </div>
    </div>
  );
};

export default TailwindProfile;