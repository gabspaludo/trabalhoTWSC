import {useNavigate} from 'react-router-dom';
import '../index.css'

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#042940] flex flex-col items-center justify-center min h-screen">
      <h1 className="text-white text-3xl font-bold mb-4">Buscador de perfil do github</h1>
      <h2 className="text-[#ababab] text-1xl font-bold mb-10">Escolha se deseja ver o que foi feito em Tailwind ou StyledComponents</h2>

      <div className="space-x-4">
        <button
          onClick={() => navigate('/tailwind')}
          className="bg-[#DBF227] hover:bg-[#9FC131] transition-all duration-500 text-black font-bold py-2 px-4 rounded"
        >
          Tailwind
        </button>

        <button
          onClick={() => navigate('/styled')}
          className="bg-[#DBF227] hover:bg-[#9FC131] transition-all duration-500 text-black font-bold py-2 px-4 rounded"
        >
          Styled Components
        </button>
      </div>
    </div>
  );
}

export default HomePage;