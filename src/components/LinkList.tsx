import styled from "styled-components";
import githubLogo from "../images/logo-github.png";
import linkedInLogo from "../images/logo-linkedin.png";
import qiitaLogo from "../images/logo-qiita.png";
import wantedlyLogo from "../images/logo-wantedly.png";
import xLogo from "../images/logo-x.png";
import zennLogo from "../images/logo-zenn.svg";

// todo: 画像インポートファイルまとめてもいいかも
// todo: blankで表示したい

export const LinkList = () => {
  const pageTitle = "Links"

  return (
    <SLists>
      <SList>
        <SListBlock>
          <SLogo src={githubLogo} /> 
          <p><a href="https://github.com/Ishige99">https://github.com/Ishige99</a></p>
        </SListBlock>
      </SList>
      <SList>
        <SListBlock>
          <SLogo src={xLogo} /> 
          <p><a href="https://twitter.com/osamu_000">https://twitter.com/osamu_000</a></p>
        </SListBlock>
      </SList>
      <SList>
        <SListBlock>
          <SLogo src={linkedInLogo} /> 
          <p><a href="https://www.linkedin.com/in/osamu-ishiyama-a0331029b/">https://www.linkedin.com/in/osamu-ishiyama-a0331029b/</a></p>
        </SListBlock>
      </SList>
      <SList>
        <SListBlock>
          <SLogo src={wantedlyLogo} /> 
          <p><a href="https://www.wantedly.com/id/osamu_000">https://www.wantedly.com/id/osamu_000</a></p>
        </SListBlock>
      </SList>
      <SList>
        <SListBlock>
          <SLogo src={qiitaLogo} /> 
          <p><a href="https://qiita.com/osamu_0">https://qiita.com/osamu_0</a></p>
        </SListBlock>
      </SList>
      <SList>
        <SListBlock>
          <SLogo src={zennLogo} /> 
          <p><a href="https://zenn.dev/iosamu">https://zenn.dev/iosamu</a></p>
        </SListBlock>
      </SList>
    </SLists>
  )
}

const SLists = styled.div`
  list-style: none;
  padding: 0;
  text-align: center;
`
const SListBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SList = styled.div`
  margin-right: 20px;
`
const SLogo = styled.img`
  width: 25px;
  height: 25px
  margin-right: 15px;
  padding-right: 5px;
`