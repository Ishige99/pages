import { Profile } from "./components/Profile";
import { Links } from "./components/Links";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pages" element={<Profile />} />
        <Route path="/pages/link" element={<Links/>} />
      </Routes>
    </BrowserRouter>
  );
};
