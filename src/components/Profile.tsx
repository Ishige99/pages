import { PageTitle } from "./PageTitle";
import { ProfileInfo } from "./ProfileInfo";
import styled from "styled-components";

const pageTitle = "Profile"

export const Profile = () => {
  return (
    <div>
      <PageTitle pageTitle={pageTitle} />
      <SProfileBody>
        <ProfileInfo />
      </SProfileBody>
    </div>
  );
};

const SProfileBody = styled.div`
  margin: 0 0 80px 0;
`