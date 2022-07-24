import {
    format,
    parseISO,
  } from 'date-fns'
import { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const ManageBookingItem = ({appointment, parentResponse}) => {
    let startDateTime = parseISO(appointment.startDatetime)
    let endDateTime = parseISO(appointment.endDatetime)
    const [display, setDisplay] = useState(false)

    //this is used to detect click outside of the dropdown
    //and based on that close the dropdown.
    useEffect(() => {
      //if the dropdown is already closed, do nothing
      if (!display) return;
      
      const handleClickOutside = event => {
        const element = document.getElementById(appointment.id)

        if(!element.contains(event.target)) {
          setDisplay(!display)
        }
      }

      //adding the event listener
      window.addEventListener("mousedown", handleClickOutside);

      //removing the event listener
      return () => window.removeEventListener("mousedown", handleClickOutside);
    }, [display]);

    return (
      <li className="flex items-center px-4 py-2 space-x-4 rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 hover:shadow-md hover:shadow-slate-200 duration-500">
        <div className="flex-auto">
            <p className="mt-1 text-base mb-2">
                <time dateTime={appointment.startDatetime}>
                {format(startDateTime, 'h:mm a')}
                </time>{' '}
                -{' '}
                <time dateTime={appointment.endDatetime}>
                {format(endDateTime, 'h:mm a')}
                </time>
            </p>
        </div>

        {/* Setting the appointment id as document id to prevent weird behaviour of the dropdown menu */}
        <div id={appointment.id} className="relative">
          <button onClick={() => setDisplay(!display)}>
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            show={display}
          >
            <ul className='origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <li>
                <button className="w-full text-left text-gray-700 px-4 py-2 text-sm duration-500 hover:bg-gray-100" onClick={() => {
                  parentResponse(appointment)
                  setDisplay(false)
                }}>Edit</button>
                <button className="w-full text-left text-gray-700 px-4 py-2 text-sm duration-500 hover:bg-gray-100" onClick={() => {
                  setDisplay(false)
                }}>Delete</button>
              </li>
            </ul>
          </Transition>
        </div>
      </li>
  )
}

export default ManageBookingItem