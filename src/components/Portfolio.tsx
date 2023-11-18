import { PageTitle } from "./PageTitle";
import styled from "styled-components";

const pageTitle = "Portfolios"

export const Portfolio = () => {
  return (
    <div>
      <PageTitle pageTitle={pageTitle} />
      <SPortfolioBody>
        <SPortfolioTmpText>Comming soon...</SPortfolioTmpText>
      </SPortfolioBody>
    </div>
  )
};

const SPortfolioBody = styled.div`
  margin: 0 0 80px 0;
`
const SPortfolioTmpText = styled.h3`
  text-align: center;
`