import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Salon from "../pages/salon/salon";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Salon />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
