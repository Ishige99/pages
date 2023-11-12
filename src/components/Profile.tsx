import { PageTitle } from "./PageTitle";
import { ProfileInfo } from "./ProfileInfo";

export const Profile = () => {
  const pageTitle = "Profile"

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <ProfileInfo />
    </>
  );
};