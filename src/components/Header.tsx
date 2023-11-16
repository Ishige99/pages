import { Link } from "react-router-dom";
import styled from "styled-components";
import headerLogo from "../images/header_logo.png";

export const Header = () => {
  return (
    <SHeader>
      <Link to={"/pages"}><SHeaderLogo src={headerLogo} /></Link>
      <div>
        <SHeaderLink to={"/pages/links"}>Links</SHeaderLink>
      </div>
    </SHeader>
  );
};

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
const SHeaderLogo = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 0 0 30px;
`;
const SHeaderLink = styled(Link)`
  margin-right: 100px;
`;
