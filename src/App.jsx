import React from "react"
import HomePage from "./pages/HomePage"
import Inscription from "./pages/SignUp"
import Connexion from "./pages/SignIn"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/accueil" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
