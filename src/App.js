import { createContext, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './App/login/page';
import SignUp from './App/signup/page';
import './App.css';


export const AuthContext = createContext(null);


function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{user, setUser}}>
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={user ? <h1>Todo</h1> : <Login />} />
          

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
