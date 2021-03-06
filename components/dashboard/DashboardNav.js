import Link from 'next/link'
import Image from 'next/image'
// import { Disclosure, Transition } from '@headlessui/react'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '../../lib/context'
import { auth } from '../../lib/firebase'

const DashboardNav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [displayDisabled, setDisplayDisabled] = useState(false)
  const {user} = useContext(AppContext)

  // When user clicks on a menu item, close the menu
  useEffect(() => {
    if(isOpen) {
      setIsOpen(!isOpen);
    }
    if(router.pathname.includes('/dashboard')) {
      setDisplayDisabled(true);
    } else {
      setDisplayDisabled(false);
    }
  }, [router.asPath])

  return (
    <>
      {displayDisabled === true && 
      <nav className="px-2 sm:px-4 py-2.5 bg-white shadow-sm shadow-slate-300 fixed top-0 left-0 w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href={'/'}>
            <div className="flex items-center mr-3 cursor-pointer">
                <Image src="/imgs/logo.svg" width="80px" height="40px" objectFit="contain" alt="Booqlet Logo" />
                {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
            </div>
          </Link>
          <div className="flex md:order-2">
              <Link href={'/register'}>
                <button type="button" className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 duration-500">
                  Profile
                </button>
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-900 rounded-full md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 duration-500" aria-controls="mobile-menu-4" aria-expanded="false">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
          </div>
          {/* Desktop menu items */}
          <div className={`${isOpen ? "!left-[0%]" : ""} flex !z-[99999] justify-center items-center w-full fixed top-[60px] left-[100%] bg-white shadow-sm shadow-slate-300 duration-500 md:shadow-none md:w-auto md:order-1 md:justify-start md:relative md:top-auto md:left-auto`} id="mobile-menu-4">
            <ul className="flex flex-col mt-4 w-min text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:text-left">
              {user && <>
                <li className="py-2 pr-4 pl-3 text-gray-800 hover:text-gray-600 duration-500">
                  <Link href={`/dashboard/${user.uid}`}>Appointments</Link>
                </li>
                <li className="py-2 pr-4 pl-3 text-gray-800 hover:text-gray-600 duration-500">
                  <Link href={`/dashboard/${user.uid}/manage-calendar`}>Calendar</Link>
                </li>
                <li className="py-2 pr-4 pl-3 text-gray-800 hover:text-gray-600 duration-500">
                  <Link href={`/dashboard/${user.uid}/manage-content`}>Content</Link>
                </li>
                <li onClick={() => auth.signOut()} className="py-2 pr-4 pl-3 text-gray-800 hover:text-gray-600 duration-500 cursor-pointer">
                  Logout
                </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
      }
    </>
  )
}

export default DashboardNav