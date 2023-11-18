import { PageTitle } from "./PageTitle";
import { LinkList } from "./LinkList";

const pageTitle = "Links"

export const Link = () => {
  return (
    <div>
      <PageTitle pageTitle={pageTitle} />
      <LinkList />
    </div>
  )
}