import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './App/login/page';
import SignUp from './App/signup/page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;
