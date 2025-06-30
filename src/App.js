import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Header from './component/Header/header';

const App = () => {
 

  return (
    <div className="app-container">
      <Header />
     
    </div>
  );
}

export default App;
