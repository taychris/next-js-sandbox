import { useEffect, useState } from 'react'
import ManageCalendar from '../../../../components/Dashboard/ManageCalendar'

const ManageCalendarPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'Leslie Alexander',
      imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-07-11T13:00',
      endDatetime: '2022-07-11T14:30',
    },
    {
      id: 1222,
      name: 'Leslie Alexander',
      imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-07-11T13:00',
      endDatetime: '2022-07-11T14:30',
    },
    {
      id: 111,
      name: 'Leslie Alexander',
      imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-07-11T13:00',
      endDatetime: '2022-07-11T14:30',
    },
    {
      id: 1355,
      name: 'Leslie Alexander',
      imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-07-11T13:00',
      endDatetime: '2022-07-11T14:30',
    },
    {
      id: 1123,
      name: 'Leslie Alexander',
      imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-07-11T13:00',
      endDatetime: '2022-07-11T14:30',
    },
    {
      id: 154,
      name: 'Leslie Alexander',
      imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-07-11T13:00',
      endDatetime: '2022-07-11T14:30',
    },
    {
      id: 12,
      name: 'Leslie Alexander',
      imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-07-11T13:00',
      endDatetime: '2022-07-11T14:30',
    },
    {
      id: 123,
      name: 'Leslie Alexander',
      imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-07-11T13:00',
      endDatetime: '2022-07-11T14:30',
    },

  ])
  const [appointmentSelected, setAppointmentSelected] = useState()
  const [themeColor, setThemeColor] = useState()

  useEffect(() => {
    setThemeColor({background:'bg-[#FFA69E]', color: 'text-[#FFA69E]'})
  }, [])

  return (
    <div>
      <ManageCalendar appointments={appointments} themeColor={themeColor}/>
    </div>
  )
}

export default ManageCalendarPage