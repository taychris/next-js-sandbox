import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/solid'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
  } from 'date-fns'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router';
import Layout from '../Layout'
import ManageBookingItem from './ManageBookingItem';
import ManageBookingForm from './ManageBookingForm';
import AddBookingForm from './AddBookingForm';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ManageCalendar = ({appointments}) => {
    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    let [isAppointmentSelected, setIsAppointmentSelected] = useState(null)
    let [displayAddForm, setDisplayAddForm] = useState(false)
    const router = useRouter();
    const ref = useRef(null);

    let colStartClasses = [
        '',
        'col-start-2',
        'col-start-3',
        'col-start-4',
        'col-start-5',
        'col-start-6',
        'col-start-7',
    ]    
  
    useEffect(() => {
      if(isAppointmentSelected) {
        console.log(isAppointmentSelected)
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
    }, [isAppointmentSelected])
  
    let days = eachDayOfInterval({
      start: firstDayCurrentMonth,
      end: endOfMonth(firstDayCurrentMonth),
    })
  
    function previousMonth() {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
      setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }
  
    function nextMonth() {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
      setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }
  
    function handleUpdate(formData) {
      console.log(formData)
      setIsAppointmentSelected(null)
  
      // router.push(
      //   { pathname: "/summary", query: { data: JSON.stringify(data) } },
      //   "/summary"
      // );
    }

    function handleSubmit(formData) {
      console.log(formData)
    }
  
    let selectedDayAppointments = appointments.filter((appointment) =>
      isSameDay(parseISO(appointment.startDatetime), selectedDay)
    )
  
    return (
      <Layout>
        <div className="py-16 mt-[60px]">
          <div className="max-w-md px-4 mx-auto mb-10 sm:px-7 md:max-w-4xl md:px-6">
            <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">

              {/* Calendar starts here */}
              <div className="md:pr-14">
                <div className="flex items-center">
                  <h2 className="flex-auto font-semibold text-gray-900">
                    {format(firstDayCurrentMonth, 'MMMM yyyy')}
                  </h2>
                  <button
                    type="button"
                    onClick={previousMonth}
                    className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Previous month</span>
                    <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    onClick={nextMonth}
                    type="button"
                    className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Next month</span>
                    <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                  <div>S</div>
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                </div>
                <div className="grid grid-cols-7 mt-2 text-sm">
                  {days.map((day, dayIdx) => (
                    <div
                      key={day.toString()}
                      className={classNames(
                        dayIdx === 0 && colStartClasses[getDay(day)],
                        'py-1.5'
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDay(day)
                          setIsAppointmentSelected(null)
                          // setBookingItemSelected({})
                        }}
                        className={classNames(
                          isEqual(day, selectedDay) && 'text-white',
                          !isEqual(day, selectedDay) &&
                            isToday(day) &&
                            'text-red-500',

                          !isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            isSameMonth(day, firstDayCurrentMonth) &&
                            'text-gray-900',

                          !isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            !isSameMonth(day, firstDayCurrentMonth) &&
                            'text-gray-400',

                          isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                          isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            'bg-gray-900',
                            
                          !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                          (isEqual(day, selectedDay) || isToday(day)) &&
                            'font-semibold',
                          'mx-auto flex h-8 w-8 items-center justify-center rounded-full duration-500'
                        )}
                      >
                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                          {format(day, 'd')}
                        </time>
                      </button>
  
                      <div className="w-1 h-1 mx-auto mt-1">
                        {appointments.some((appointment) =>
                          isSameDay(parseISO(appointment.startDatetime), day)
                        ) && (
                          <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedules start here */}
              <section className="mt-12 md:mt-0 md:pl-14">
                <div className="flex items-center">
                  <h2 className="font-semibold text-gray-900">
                    Schedule for{' '}
                    <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                      {format(selectedDay, 'MMM dd, yyy')}
                    </time>
                  </h2>
                  <button className="ml-5 duration-500 bg-gray-800 p-2 rounded-full group" onClick={() => setDisplayAddForm(true)}>
                    <PlusIcon className="w-4 h-4 duration-500 fill-white group-hover:scale-125"/>
                  </button>
                </div>
                <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500 max-h-80 overflow-y-auto pb-24">
                  {selectedDayAppointments.length > 0 ? (
                    selectedDayAppointments.map((appointment) => (
                      <ManageBookingItem appointment={appointment} parentResponse={() => setIsAppointmentSelected(appointment)} bgColor={"bg-gray-900"} key={appointment.id} />
                    ))
                  ) : (
                    <p>No bookings available for today.</p>
                  )}
                </ol>
              </section>

            </div>
          </div>

          {isAppointmentSelected && 
            <div ref={ref}>
              <ManageBookingForm formInformation={handleUpdate} appointment={isAppointmentSelected}/>
            </div>
          }
          {displayAddForm && 
            <div ref={ref}>
              <AddBookingForm formInformation={handleSubmit}/>
            </div>
          }
        </div>
      </Layout>
    )
}

export default ManageCalendar