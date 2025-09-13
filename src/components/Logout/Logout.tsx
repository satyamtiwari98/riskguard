// pages/Logout.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Cookies.remove("login");
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Logout;
