import { PageTitle } from "./PageTitle";
import { LinkList } from "./LinkList";
import styled from "styled-components";

const pageTitle = "Links";

export const Link = () => {
  return (
    <div>
      <PageTitle pageTitle={pageTitle} />
      <SLinkBody>
        <LinkList />
      </SLinkBody>
    </div>
  );
};

const SLinkBody = styled.div`
  margin: 0 0 80px 0;
  transition: 0.2s;
  @media (max-width: 600px) {
    margin: 0 0 50px 0;
  }
`;
