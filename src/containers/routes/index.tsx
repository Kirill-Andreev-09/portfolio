import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Admin, Home } from "../pages";
import { ROUTE_URL } from "src/config";
import { NotFound } from "src/components/not-found";

export const MainRoutes = () => {
  return (
    <BrowserRouter basename={ROUTE_URL === "" ? "/" : ROUTE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};
