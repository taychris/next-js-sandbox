import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Title</title>
      </Head>
      <h1 className="text-green-500">Welcome to next</h1>
    </div>
  )
}
