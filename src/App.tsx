import { Profile } from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pages" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
