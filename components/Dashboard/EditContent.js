import { useEffect, useState } from "react"

const EditContent = () => {
  const [title, setTitle] = useState()
  const [secondTitle, setSecondTitle] = useState()
  const [description, setDescription] = useState()

  const submitForm = () => {
    console.log(true)
  }

  useEffect(() => {
    // fetch data here
  }, [])

  return (
    <div className="w-full md:w-1/2">
      <div className="shadow-md shadow-gray-300 p-10 rounded-xl text-gray-800 w-11/12">
        <div className="w-[90%] m-auto md:w-full">
          <h1 className="font-semibold text-3xl">Edit your content.</h1>
          <p className="font-light text-gray-400 text-sm mb-5">After you{"'"}re done editing, save your work.</p>
        </div>
        <form className="flex flex-col mb-5 w-[90%] m-auto md:w-full" onSubmit={(e) => {
                e.preventDefault()
                submitForm()
            }}>
            <label htmlFor="title" className="font-medium">Title</label>
            <input onChange={(e) => setTitle(e.target.value)}type="text" name="title" id="title" className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
            <label htmlFor="secondTitle" className="font-medium">Second Title</label>
            <input onChange={(e) => setSecondTitle(e.target.value)} type="text" name="secondTitle" id="secondTitle" className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
            <label htmlFor="description" className="font-medium">Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
            <button className="rounded-full group h-[40px] bg-gray-900 py-2 px-8 capitalize text-white text-base duration-500 shadow-md shadow-slate-50 hover:shadow-slate-400" type="submit">
                <span className="group-hover:text-lg duration-500">
                    Save
                </span>
            </button>
          </form>
      </div>
    </div>
  )
}

export default EditContent