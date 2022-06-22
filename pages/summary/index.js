import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
    format,
    parseISO,
  } from 'date-fns'
import Image from 'next/image'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Layout from '../../components/Layout' 

const Index = () => {
  const [summary, setSummary] = useState({})
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')
  const router = useRouter()

  useEffect(() => {
    if(router.query.data) {
        setSummary(JSON.parse(router.query.data))
    }
  }, [router.query]);

  useEffect(() => {
    if(summary.bookingItemSelected !== undefined) {
        setStartDateTime(parseISO(summary.bookingItemSelected.startDatetime))
        setEndDateTime(parseISO(summary.bookingItemSelected.endDatetime))
    }
  }, [summary])

  return (
    <Layout>
      <div className="w-full h-full flex justify-start items-start flex-col px-10 mt-24 tracking-wide md:flex-row relative">
          {startDateTime ? 
          <>
              <Link href={`/booking/${summary.slug}`}>
                <ChevronLeftIcon className="absolute top-1/2 w-14 h-14 cursor-pointer hover:opacity-70 duration-500" aria-hidden="true" style={{"transform": "translateY(-50%)"}}/>
              </Link>
              <div className="w-[100%] relative h-[150px] flex justify-center items-center mb-10 -z-10 md:pr-16 md:justify-end md:w-[40%] md:h-[250px] md:mb-0">
                  <Image src="/imgs/success_check.png" layout='fill' objectFit='contain' className='!relative'/>
              </div>
              <div className="flex flex-col w-[100%] md:w-[60%]">
                  <h1 className="text-5xl w-full font-medium text-slate-700 mb-10">Your booking summary.</h1>
                  {/* <h2 className="text-slate-700 border-b border-b-slate-300 text-4xl font-medium">Appointment</h2> */}
                  <p className="text-slate-500 font-light text-3xl mb-2">{format(startDateTime, 'MMM dd, yyy')}</p>
                  <p className="text-slate-500 font-light text-3xl mb-10">{format(startDateTime, 'hh:mm a')} - {format(endDateTime, 'h:mm a')}</p>
                  <p className="text-slate-500 text-xl font-light">Confirmation will be sent to <span className="text-slate-900 font-normal">{summary.formData.email}.</span></p>
              </div>
          </> 
          : <p>Nothing.</p>}
        
      </div>
    </Layout>
  )
}

export default Index