import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
