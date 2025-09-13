import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import Logout from "./components/Logout/Logout.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";

const App: React.FC = () => {
  return (
    <div className="p-4 w-full">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
