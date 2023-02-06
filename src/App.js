import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import ResultPage from './components/resultPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/result" element={<ResultPage/>} />
          <Route exact path="/"element={<Home/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
