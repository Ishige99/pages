import { Profile } from "./components/Profile";
import { Link } from "./components/Link";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// todo: 直リンク入力だと未レンダリングにより404になるので、リダイレクトなりの対応が必要
// https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages
// https://qiita.com/takuya0206/items/f284b5e68f48f1ebefae

export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/pages" element={<Profile />} />
          <Route path="/pages/links" element={<Link />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
