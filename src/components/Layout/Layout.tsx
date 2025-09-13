import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import InactivityHandler from "../Utils/InactivityHandler";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  const location = useLocation();
  const hideLayoutPaths = ["/login", "/logout", "*"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      {!shouldHideLayout && <InactivityHandler />}
      <main>
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default Layout;
