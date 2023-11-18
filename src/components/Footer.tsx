import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      <SFooterCopyLight>© 2023 Osamu Ishiyama</SFooterCopyLight>
    </SFooter>
  );
};

const SFooter = styled.div`
  border-top: 1px solid #dddddd;
  text-align: center;
  margin: 0 0 40px 0;
`;
const SFooterCopyLight = styled.div`
  margin: 30px 0 0 0;
  font-family: Arial;
  color: #aaaaaa;
`;
