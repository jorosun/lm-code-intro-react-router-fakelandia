import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../components/home";
import MisdemeanoursPage from "../components/misdemeanours";
import Confession from "../components/confession";
import NotFound from "../components/notfound";

export const FakelandiaRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="misdemeanours" element={<MisdemeanoursPage />} />
      <Route path="confession" element={<Confession />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
