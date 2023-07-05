import { createContext, useState, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './App/login/page';
import SignUp from './App/signup/page';
import ToDo from './App/page';
import './App.css';


export const AuthContext = createContext(null);


function App() {
  const [user, setUser] = useState();

const _setUser = (data) => {
  sessionStorage.setItem("user", JSON.stringify(data));
  setUser(data)
}

  useEffect(() => {
    if(!user){
      //looking to see if user was stored in session data
      const previousUser = sessionStorage.getItem("user")
      if(previousUser){
        //if so lets set state back to that user
        setUser(JSON.parse(previousUser))
      }
    }
  }, [])
  return (
    <AuthContext.Provider value={{user, setUser: _setUser}}>
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={user ? <ToDo /> : <Login />} />
          

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
