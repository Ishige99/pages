import styled from "styled-components";

export const PageTitle = (props: {pageTitle: string}) => {
  const {pageTitle} = props
  return <SPageTitle>{pageTitle}</SPageTitle>
}

const SPageTitle = styled.h1`
  text-align: center;
  font-family: Arial;
  font-size: 35px;
  margin: 50px 0;
`;