import { PageTitle } from "./PageTitle";
import { LinkList } from "./LinkList";

export const Link = () => {
  const pageTitle = "Links"

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <LinkList />
    </>
  )
}