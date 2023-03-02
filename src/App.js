import axios from 'axios';
import './App.css';

function App() {

  let config = {
    headers: "Access-Control-Allow-Origin"
    
  }

  const login = () => {
    axios.get('http://localhost:5000/',config);
  }



return (
  <div className="App">
      <button onClick={login}> Login </button>
  </div>
);
}

export default App;
