import styled from "styled-components";
import { ProfileInfo } from "./ProfileInfo";

export const Profile = () => {
  return (
    <>
      <SPageTitle>Profile</SPageTitle>
      <ProfileInfo />
    </>
  );
};

const SPageTitle = styled.h1`
  text-align: center;
  font-family: sans-serif;
  margin: 20px 0 30px 0;
`;