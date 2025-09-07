import { useState } from 'react'
import './App.css'
import LoginSub from './assets/LoginSub'
import Dashboard from './assets/dashboard/Dashboard'
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const handleLogin = () => {
    setIsLogin(true);
  };
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      {/* {isLogin ? (
        <Dashboard />
      ) : (
        <LoginSub handleLogin={handleLogin} />
      )} */}
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <LoginSub handleLogin={handleLogin} />
      )}
    </>
  )
}

export default App
