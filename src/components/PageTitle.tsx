import styled from "styled-components";

export const PageTitle = (props: {pageTitle: string}) => {
  const {pageTitle} = props
  return <SPageTitle>{pageTitle}</SPageTitle>
}

const SPageTitle = styled.h1`
  text-align: center;
  font-family: sans-serif;
  margin: 20px 0 30px 0;
`;