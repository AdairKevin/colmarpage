import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Salon from "../pages/salon/salon";
import Carpas from "../pages/carpas/carpas";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Salon />} />
        <Route path="carpas" element={<Carpas />} />
        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
