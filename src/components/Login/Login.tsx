// pages/Login.tsx
import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    Cookies.set("login", "green");
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
