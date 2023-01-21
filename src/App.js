import logo from './logo.svg';
import './App.css';
import Registration from './routes/registration';
import Verification from './routes/verification';

function App() {
  return (
    <div className="App">
        <div className='row'>
        <Registration />
        <Verification />
        
      </div>
    </div>
  );
}

export default App;
