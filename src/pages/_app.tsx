import { SessionProvider } from "next-auth/react"
import { AppProps } from "../../node_modules/next/app"
import { Header } from "../components/Header"


import "../styles/global.scss"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
