import { Profile } from "./components/Profile";
import { Link } from "./components/Link";
import { Portfolio } from "./components/Portfolio";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// todo: 直リンク入力だと未レンダリングにより404になるので、リダイレクトなりの対応が必要
// https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages
// https://qiita.com/takuya0206/items/f284b5e68f48f1ebefae

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