import { Link } from "react-router-dom";
import headerLogo from "../images/header_logo.png";

export const Header = () => {
  return (
    <>
      <img src={headerLogo} />
      <Link to={"/pages/links"}>Links</Link>
    </>
  );
};