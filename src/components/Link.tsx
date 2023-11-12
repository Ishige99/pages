import { PageTitle } from "./PageTitle";

export const Link = () => {
  const pageTitle = "Links"

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <ul>
        <li>GitHub: <a href="https://github.com/Ishige99">https://github.com/Ishige99</a></li>
        <li>X: <a href="https://twitter.com/osamu_000">https://twitter.com/osamu_000</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/osamu-ishiyama-a0331029b/">https://www.linkedin.com/in/osamu-ishiyama-a0331029b/</a></li>
        <li>Wantedly: <a href="https://www.wantedly.com/id/osamu_000">https://www.wantedly.com/id/osamu_000</a></li>
        <li>Qiita: <a href="https://qiita.com/ishige990">https://qiita.com/ishige990</a></li>
        <li>Zenn: <a href="https://zenn.dev/iosamu">https://zenn.dev/iosamu</a></li>
        <li>Bento: <a href="https://bento.me/osamu">https://bento.me/osamu</a></li>
      </ul>
    </>
  )
}