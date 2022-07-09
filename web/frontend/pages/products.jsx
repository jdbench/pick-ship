import{
    Page
} 
from "@shopify/polaris";

import { resourceList } from "../components"
export default function products() {
  return (
    <Page>
        <div>products</div>
        <resourceList />
    </Page>
  )
}
