import {
    format,
    parseISO,
  } from 'date-fns'

const BookingItem = ({meeting}) => {
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)
  
    return (
      <li className="flex items-center px-4 py-2 space-x-4 rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 hover:shadow-md hover:shadow-slate-200 duration-500">
        {/* <img
          src={meeting.imageUrl}
          alt=""
          className="flex-none w-10 h-10 rounded-full"
        /> */}
        <div className="flex-auto">
          {/* <p className="text-gray-900">{meeting.name}</p> */}
            <p className="mt-1 text-base mb-2">
                <time dateTime={meeting.startDatetime}>
                {format(startDateTime, 'h:mm a')}
                </time>{' '}
                -{' '}
                <time dateTime={meeting.endDatetime}>
                {format(endDateTime, 'h:mm a')}
                </time>
            </p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white py-1 px-4 rounded-full duration-500 mb-1">
                Book now.
            </button>
        </div>
      </li>
  )
}

export default BookingItem