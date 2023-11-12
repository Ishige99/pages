import { Profile } from "./components/Profile";
import { Link } from "./components/Link";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pages" element={<Profile />} />
        <Route path="/pages/links" element={<Link/>} />
      </Routes>
    </BrowserRouter>
  );
};
