import { useState } from 'react'
import './App.css'
import Login from './assets/Login'
import LoginSub from './assets/LoginSub'
import Dashboard from './assets/dashboard/Dashboard'
function App() {
  // const uniqueId = crypto.randomUUID();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // // const [allEntry, setAllEntry] = useState([]);
  // const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  return (
    <>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <LoginSub handleLogin={handleLogin} />
      )}

    </>
  )
}

export default App
