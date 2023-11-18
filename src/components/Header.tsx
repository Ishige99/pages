import { Link } from "react-router-dom";
import styled from "styled-components";
import headerLogo from "../images/header_logo.png";

export const Header = () => {
  return (
    <SHeader>
      <Link to={"/pages"}>
        <SHeaderLogo src={headerLogo} />
      </Link>
      <SHeaderLinks>
        <SHeaderLink to={"/pages"}>Profile</SHeaderLink>
        <SHeaderLink to={"/pages/link"}>Links</SHeaderLink>
        <SHeaderLink to={"/pages/portfolio"}>Portfolios</SHeaderLink>
      </SHeaderLinks>
    </SHeader>
  );
};

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
`;
const SHeaderLogo = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 0 0 30px;
  transition: 0.15s;
  &:hover {
    transform: scale(1.15);
  }
`;
const SHeaderLinks = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
`;
const SHeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-family: Arial;
  transition: 0.1s;
  &:hover {
    color: #aaaaaa;
  }
  @media (max-width: 600px){
    font-size: 14px;
  }
`;
