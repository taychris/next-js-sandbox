import Link from 'next/link'

const BookingNav = ({ slug }) => {
  return (
    <nav className="w-full sticky top-0 flex justify-between items-center p-6 bg-white z-10 h-[88px] shadow-md shadow-slate-300">
        <Link href={`/booking/${slug}`}>
            <h1 className="font-extrabold text-4xl cursor-pointer hover:opacity-70 duration-500 hover:scale-105">db<span className="text-red-400">.</span></h1>
        </Link>
        <ul className="flex gap-10 font-bold text-xl">
            <Link href={`/booking/${slug}/calendar`}>
                <li className="cursor-pointer hover:opacity-70 hover:scale-105 duration-500">Booking</li>
            </Link>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default BookingNav