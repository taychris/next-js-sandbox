import {
    format,
    parseISO,
  } from 'date-fns'
import { useState } from 'react'

const BookingItem = ({meeting, parentResponse}) => {
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)
  
    return (
      <li className="flex items-center px-4 py-2 space-x-4 rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 hover:shadow-md hover:shadow-slate-200 duration-500">
        <div className="flex-auto">
            <p className="mt-1 text-base mb-2">
                <time dateTime={meeting.startDatetime}>
                {format(startDateTime, 'h:mm a')}
                </time>{' '}
                -{' '}
                <time dateTime={meeting.endDatetime}>
                {format(endDateTime, 'h:mm a')}
                </time>
            </p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white py-1 px-4 rounded-full duration-500 mb-1" onClick={() => {
              parentResponse(meeting)
            }}>
                Book now.
            </button>
        </div>
      </li>
  )
}

export default BookingItem