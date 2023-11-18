import profileImage from "../images/profile.png";
import styled from "styled-components";

const profile = {
  name: "Osamu Ishiyama",
  birth: "2000/02/04",
  address: "Tokyo/Japan",
  job: "Software Engineer",
};

export const ProfileInfo = () => {
  return (
    <SProfileContainer>
      <SProfileImage src={profileImage} />
      <div>
        <SProfileList>Name: {profile.name}</SProfileList>
        <SProfileList>Birth: {profile.birth}</SProfileList>
        <SProfileList>Address: {profile.address}</SProfileList>
        <SProfileList>Job: {profile.job}</SProfileList>
      </div>
    </SProfileContainer>
  );
};

const SProfileContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;
const SProfileImage = styled.img`
  height: 250px;
  width: 250px;
`;
const SProfileList = styled.p`
  font-family: Arial;
  font-size: 17px;
`;
