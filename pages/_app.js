import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Nav from '../components/Nav'
import { AppContext } from '../lib/context'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase'
import DashboardNav from '../components/Dashboard/DashboardNav'

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth)

  return (
    <AppContext.Provider value={{user}}>
      <Head>
        <title>NextJS Title</title>
      </Head>
      <Nav/>
      <DashboardNav/>
      <AnimatePresence exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} />
      </AnimatePresence>
    </AppContext.Provider>
  )
}

export default MyApp
