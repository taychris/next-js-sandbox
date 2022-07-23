import { CloudUploadIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { useEffect, useState } from "react"

const EditLogo = () => {
  const [logo, setLogo] = useState()

  const handleUpload = event => {
    setLogo(event.target.files[0])
  }

  useEffect(() => {
    //load data here
  }, [])

  return (
    <div className="shadow-md shadow-gray-300 p-10 rounded-xl text-gray-800 w-11/12 mb-10">
        <div className="w-[90%] m-auto md:w-full">
            <h1 className="font-semibold text-3xl">Update your logo.</h1>
            <p className="font-light text-gray-400 text-sm mb-5">After uploading your images,they will be automatically saved.</p>
        </div>
        <div className="relative w-20 h-20">
            <Image src={'/imgs/logo.svg'} layout="fill" alt="Business logo." objectFit="contain"/>
            <label htmlFor="logo" className="absolute -bottom-2 -right-3  bg-gray-800 rounded-full p-2 group cursor-pointer">
                <CloudUploadIcon className="stroke-white w-4 h-4 duration-500 group-hover:scale-110"/>
            </label>
            <input onChange={handleUpload} type="file" id="logo" name="logo" required className="hidden"/>
        </div>
    </div>
  )
}

export default EditLogo