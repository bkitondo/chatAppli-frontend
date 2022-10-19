import HomePage from './pages/HomePage';
import Inscription from './pages/SignUp';
import Connexion from './pages/SignIn';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [token, setToken] = useState("")

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Connexion setToken={setToken} /> } />
              <Route path='/inscription' element={<Inscription  setToken={setToken}/> } />
              <Route path='/accueil' element={<HomePage setToken={setToken} />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
