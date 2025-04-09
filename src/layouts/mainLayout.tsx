import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
