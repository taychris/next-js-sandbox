import { format } from 'date-fns'
import { useEffect, useState } from 'react'

const AddBookingForm = ({formInformation}) => {
    const dateNow = format(new Date(), "yyyy-MM-dd'T'HH:mm")
    const [state, setState ] = useState()
  
    const handleChange = async (event) => {
      setState({ ...state, [event.target.name]: event.target.value })
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // pass state to parent component
      formInformation(state);
      event.target.reset()
    }
  
    return (
      <div className="max-w-md px-4 mx-auto mb-10 sm:px-7 md:max-w-4xl md:px-6 flex items-center justify-center flex-col">
          <h2 className="mt-10 mb-5 text-left w-full md:w-1/2 font-semibold text-gray-900">Add new appointment.</h2>
          <form className="flex w-full md:w-1/2 flex-col items-center justify-center" onSubmit={handleSubmit}>
              <label htmlFor="startDatetime" className="w-full text-left">Start date {'&'} time</label>
              <input type="datetime-local" id="startDatetime" name="startDatetime" min={dateNow} required onChange={handleChange}
              className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none"/>
              
              <label htmlFor="endDatetime" className="w-full text-left">End date {'&'} time</label>
              <input type="datetime-local" id="endDatetime" name="endDatetime" min={dateNow} required onChange={handleChange}
              className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none"/>
              
              <button className="rounded-full bg-gray-800 py-2 px-8 capitalize text-white text-base duration-500 shadow-md shadow-slate-50 hover:shadow-slate-400  hover:scale-105" type="submit">Save</button>
          </form>
      </div>
    )
}

export default AddBookingForm