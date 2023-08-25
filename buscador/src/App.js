
import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..."/>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>Cep: 64456465</h2>
        <span>Rua: Coronel</span>
        <span>Bairro: Maria das dores</span>
        <span>Estado: São Paulo</span>
        <span>Cidade: Gasparzinho</span>
      </main>

    </div>
  );
}

export default App;

