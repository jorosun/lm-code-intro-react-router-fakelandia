import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../components/home";
import Misdemeanours from "../components/misdemeanours";
import Confession from "../components/confession";
import NotFound from "../components/notfound";

export const FakelandiaRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="misdemeanours" element={<Misdemeanours />} />
      <Route path="confession" element={<Confession />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
