import Layout from '../components/Layout' 
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[90vh] mt-14">
        <Link href={`/booking/barber`}>
          <h1>Home page</h1>
        </Link>
      </div>
    </Layout>
  )
}
