import './App.css';
import SearchFilter from "./components/SearchFilter";
import data from './names.json';

function App() {
  return (
    <div className="App">
      <SearchFilter placeholder={"enter name"} data={data}/>
    </div>
  );
}

export default App;
