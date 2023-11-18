import { Profile } from "./components/Profile";
import { Link } from "./components/Link";
import { Portfolio } from "./components/Portfolio";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

export const App = () => {
  return (
    <SAppBody>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/pages" element={<Profile />} />
          <Route path="/pages/link" element={<Link />} />
          <Route path="/pages/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SAppBody>
  );
};

const SAppBody = styled.div`
  width: 80%;
  margin: 0 auto;
`