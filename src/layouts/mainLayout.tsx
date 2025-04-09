import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "0" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
