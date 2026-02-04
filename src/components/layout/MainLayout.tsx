import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import CookieBanner from "../CookieBanner";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
};

export default MainLayout;
