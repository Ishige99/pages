import { PageTitle } from "./PageTitle";
import { ProfileInfo } from "./ProfileInfo";

const pageTitle = "Profile"

export const Profile = () => {
  return (
    <div>
      <PageTitle pageTitle={pageTitle} />
      <ProfileInfo />
    </div>
  );
};