import profileImage from "../images/profile.png";
import styled from "styled-components";

// プロフィール情報
const profile = {
  name: "Osamu Ishiyama",
  gender: "Male",
  birth: "2000/02/04",
  address: "Tokyo/Japan",
  job: "Software Engineer",
};

export const ProfileInfo = () => {
  return (
    <SProfileContainer>
      <SProfileImage src={profileImage} />
      <ul>
        {Object.entries(profile).map(([k, v]) => (
          <SProfileList key={k}>
            {k.charAt(0).toUpperCase() + k.slice(1)}: {v}
          </SProfileList>
        ))}
      </ul>
    </SProfileContainer>
  );
};

const SProfileContainer = styled.div`
  margin: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

// todo: レスポンシブ対応にする必要あり
const SProfileImage = styled.img`
  height: 300px;
  width: 300px;
`;

const SProfileList = styled.li`
  margin: 5px 0;
  font-family: Arial;
`;
