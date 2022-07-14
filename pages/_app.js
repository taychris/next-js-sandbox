import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Nav from '../components/Nav'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJS Title</title>
      </Head>
      <Nav />
      <AnimatePresence exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
