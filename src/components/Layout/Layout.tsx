// components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();

  // Pages where Header & Footer should be hidden
  const hideLayoutPaths = ["/login", "/logout", "*"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default Layout;
