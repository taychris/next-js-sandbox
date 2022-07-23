import { CloudUploadIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { useState } from "react"

const EditCover = () => {
  const [cover, setCover] = useState()

  const handleUpload = event => {
    setCover(event.target.files[0])
  }

  return (
    <div className="shadow-md shadow-gray-300 p-10 rounded-xl text-gray-800 w-11/12">
        <div className="w-[90%] m-auto md:w-full">
            <h1 className="font-semibold text-3xl">Update your cover.</h1>
            <p className="font-light text-gray-400 text-sm mb-5">After uploading your images,they will be automatically saved.</p>
        </div>
        <div className="relative w-48 h-48">
            <Image src={'https://images.unsplash.com/photo-1499366440726-52cbc45a5c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} layout="fill" objectFit="contain" alt="Business logo."/>
            <label htmlFor="logo" className="absolute -bottom-2 -right-3  bg-gray-800 rounded-full p-2 group cursor-pointer">
                <CloudUploadIcon className="stroke-white w-4 h-4 duration-500 group-hover:scale-110"/>
            </label>
            <input onChange={handleUpload} type="file" id="logo" name="logo" required className="hidden"/>
        </div>
    </div>
  )
}

export default EditCover