import './App.css';
import {Routes, Route} from 'react-router-dom'
import HeaderBar from './Components/HeaderBar/HeaderBar';
import StarshipList from './Pages/StarshipList/StarshipList';
import StarshipDetails from './Pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div className="App">
      <>
        <HeaderBar/>
        <Routes>
          <Route path="/" element={<StarshipList/>}/>
          <Route path="/starship" element={<StarshipDetails/>}/>
        </Routes>
        
      </>
    </div>
  );
}

export default App;
