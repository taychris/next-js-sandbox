import { useState } from "react";

const BookingForm = ({ formInformation }) => {
  const [state, setState ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''    
  })

  const handleChange = async (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    formInformation(state);
  }

  return (
    <>
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 flex items-center justify-center flex-col">
            <h2 className="my-10 text-left w-full font-semibold text-gray-900">We need your contact information.</h2>
            <form className="mb-10 flex w-full flex-col items-center justify-center">
                <div className="w-full flex justify-start flex-col md:justify-between md:flex-row">
                    <div className="w-full md:w-[45%] group duration-500 p-5 mb-6 rounded-md hover:bg-slate-100 hover:shadow-md hover:shadow-slate-200">
                    <label className="w-full text-left font-light text-gray-800 text- tracking-wide" htmlFor="firstName">First name:</label>
                    <input className="mb-6 w-full border-b bg-transparent text-gray-800 duration-500 hover:border-b-slate-900 focus:border-b-slate-900 focus:outline-none active:outline-none" type="text" name="firstName"  required onChange={handleChange}/>
                    </div>  
                    <div className="w-full md:w-[45%] group duration-500 p-5 mb-6 rounded-md hover:bg-slate-100 hover:shadow-md hover:shadow-slate-200">
                    <label className="w-full text-left font-light text-gray-800 text-base tracking-wide" htmlFor="lastName">Last name:</label>
                    <input className="mb-6 w-full border-b bg-transparent text-gray-800 duration-500 hover:border-b-slate-900 focus:border-b-slate-900 focus:outline-none active:outline-none" type="text" name="lastName"  required onChange={handleChange}/>
                    </div>
                </div>
                <div className="w-full flex justify-start flex-col md:justify-between md:flex-row">
                    <div className="w-full md:w-[45%] group duration-500 p-5 mb-6 rounded-md hover:bg-slate-100 hover:shadow-md hover:shadow-slate-200">
                    <label className="w-full text-left font-light text-gray-800 text-base tracking-wide" htmlFor="email">Email:</label>
                    <input className="mb-6 w-full border-b bg-transparent text-gray-800 duration-500 hover:border-b-slate-900 focus:border-b-slate-900 focus:outline-none active:outline-none" type="email" name="email"  required onChange={handleChange}/>
                    </div>
                    <div className="w-full md:w-[45%] group duration-500 p-5 mb-6 rounded-md hover:bg-slate-100 hover:shadow-md hover:shadow-slate-200">
                    <label className="w-full text-left font-light text-gray-800 text-base tracking-wide" htmlFor="phoneNumber">Phone number:</label>
                    <input className="mb-6 w-full border-b bg-transparent text-gray-800 duration-500 hover:border-b-slate-900 focus:border-b-slate-900 focus:outline-none active:outline-none" type="text" name="phoneNumber"  required onChange={handleChange}/>
                    </div>
                </div>
                <div className="w-full group duration-500 p-5 mb-6 rounded-md hover:bg-slate-100 hover:shadow-md hover:shadow-slate-200">
                    <label className="w-full text-left font-light text-gray-800 text-base tracking-wide" htmlFor="message">Message:</label>
                    <textarea className="w-full border-b bg-transparent text-gray-800 duration-500 hover:border-b-slate-900 focus:border-b-slate-900 focus:outline-none active:outline-none" name="message" cols="20" rows="5" onChange={handleChange}></textarea>
                </div>
                <button className="rounded-full bg-gray-900 py-2 px-8 capitalize text-white text-base duration-500 hover:bg-slate-700" onClick={handleSubmit}>Next.</button>
            </form>
        </div>
    </>
  )
}

export default BookingForm