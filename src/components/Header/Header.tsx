import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      Cookies.remove("login");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="">Satyam Tiwari</div>
      <div className="flex flex-row justify-between gap-20">
        <div>
          <button className="">Something</button>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
