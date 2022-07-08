import * as React from "react"
import { consoleLog } from "../utils/consoleLog";
const SSRPage = () => (
  <main>
    <h1>SSR Page</h1>
  </main>
)
export default SSRPage

export async function getServerData() {
  const res = await fetch(`https://dog.ceo/api/breed/hound/images/random`)
  console.log('local:', await res.json())
  consoleLog()
  return {
    props: ''
  }
}