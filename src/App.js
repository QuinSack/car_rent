import { useState } from "react";
import Layout from "./components/Layout/Layout";
import { AuthContext } from "./context/AuthContext";
import {setAuthStatusInLocalStorage} from './utils/AuthStorage'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSignIn = () => {
    setIsAuthenticated(true);
    setAuthStatusInLocalStorage(true);
  }
  return (
    <div>
      <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleSignIn}}>
        <Layout />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
