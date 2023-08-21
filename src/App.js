
import './App.css';
import NavBar from './componentes/navbar/NavBar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'The Best'}/>
    </div>
  );
}

export default App;
