
import './App.css';
import { Landing, Login, PageNotFound } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged")
  );

  function onSuccess() {
    setIsLogged(true);
    localStorage.setItem("isLogged", true)
    console.log(window.localStorage.getItem("isLogged"))
  }

  function onLogout() {
    setIsLogged(false);
    localStorage.removeItem("isLogged");
  }

  return (
    <BrowserRouter>
      <UserProvider
        value={{
          onLogout,
          onSuccess,
          isLogged
        }}
      >
        <Routes>
          <Route
            path="/"
            element={isLogged ? <Landing /> : <Login />}
          />
          <Route
            path="/login"
            element={isLogged ? <Landing /> : <Login />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
