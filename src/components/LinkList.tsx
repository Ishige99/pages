import styled from "styled-components";
import githubLogo from "../images/logo-github.png";
import linkedInLogo from "../images/logo-linkedin.png";
import qiitaLogo from "../images/logo-qiita.png";
import wantedlyLogo from "../images/logo-wantedly.png";
import xLogo from "../images/logo-x.png";
import zennLogo from "../images/logo-zenn.svg";
import bentoLogo from "../images/logo-bento.svg"

const pageTitle = "Links";

export const LinkList = () => {
  return (
    <SLinkList>
      <a href="https://github.com/Ishige99" rel="noreferrer" target="_blank">
        <SLogoImage src={githubLogo} />
      </a>
      <a href="https://twitter.com/osamu_000" rel="noreferrer" target="_blank">
        <SLogoImage src={xLogo} />
      </a>
      <a href="https://bento.me/osamu" rel="noreferrer" target="_blank">
        <SLogoImage src={bentoLogo} />
      </a>
      <a href="https://qiita.com/osamu_0" rel="noreferrer" target="_blank">
        <SLogoImage src={qiitaLogo} />
      </a>
      <a href="https://www.linkedin.com/in/osamu-ishiyama-a0331029b/" rel="noreferrer" target="_blank">
        <SLogoImage src={linkedInLogo} />
      </a>
      <a href="https://www.wantedly.com/id/osamu_000" rel="noreferrer" target="_blank">
        <SLogoImage src={wantedlyLogo} />
      </a>
      {/* <a href="https://zenn.dev/iosamu" rel="noreferrer" target="_blank">
        <SLogoImage src={zennLogo} />
      </a> */}
    </SLinkList>
  );
};

const SLinkList = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;
const SLogoImage = styled.img`
  width: 60px;
  margin: 10px 0 0 0;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 600px){
    margin: 20px 0 0 0;
  }
`;
