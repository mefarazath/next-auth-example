import Layout from "../components/layout"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Page() {
  const {data} = useSession()
  const { accessToken } = data
  return (
    <Layout>
      <h1>Page protected by Middleware</h1>
      <div>Access Token: {accessToken}</div>
    </Layout>
  )

}
