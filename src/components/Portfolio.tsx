import { PageTitle } from "./PageTitle";
import styled from "styled-components";

const pageTitle = "Portfolios";

export const Portfolio = () => {
  return (
    <div>
      <PageTitle pageTitle={pageTitle} />
      <SPortfolioBody>
        <SPortfolioTmpText>Coming soon...</SPortfolioTmpText>
      </SPortfolioBody>
    </div>
  );
};

const SPortfolioBody = styled.div`
  margin: 0 0 80px 0;
  transition: 0.2s;
  @media (max-width: 600px) {
    margin: 0 0 50px 0;
  }
`;
const SPortfolioTmpText = styled.h3`
  text-align: center;
  font-family: Arial;
  color: #aaaaaa;
`;
