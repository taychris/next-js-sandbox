import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import BookingNav from '../../../components/BookingNav'
import Link from 'next/link'
import Image from 'next/image'

const Booking = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout>
        <BookingNav slug={slug}/>
        <div className="flex min-h-screen w-full flex-col md:flex-row relative">
            <div className="w-full h-screen md:w-1/2 text-slate-800 flex items-center justify-center flex-col">
                <div className="w-2/3 h-full flex flex-col justify-center">
                <h1 className="font-normal text-6xl mb-10"><span className="font-bold text-6xl">demko</span><br/> barber.</h1>
                <p className="text-3xl mb-10">{"I'm the best barber from mars. Currently working with scissors and stuff."}</p>
                <div>
                   <Link href={`/booking/${slug}/calendar`}>
                        <button className="bg-red-400 text-white px-10 py-3 rounded-full text-lg shadow-md shadow-slate-50 hover:shadow-slate-400 hover:scale-105 duration-500">Booking.</button>
                    </Link>
                </div>
                </div>
            </div>
            <div className="w-full relative h-screen md:w-1/2">
                <Image className="h-full !relative"  layout='fill' objectFit='cover' src="https://images.unsplash.com/photo-1499366440726-52cbc45a5c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Cover Image of home page"/>
            </div>
        </div>
    </Layout>

  )
}

export default Booking