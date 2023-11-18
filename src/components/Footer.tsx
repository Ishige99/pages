import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      <p>© 2023 Osamu Ishiyama</p>
    </SFooter>
  )
};

const SFooter = styled.div`
  border-top: 1px solid black;
  text-align: center;
`