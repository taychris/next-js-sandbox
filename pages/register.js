import Link from "next/link"
import Layout from "../components/Layout"

const Register = () => {
  return (
    <Layout>
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="shadow-md shadow-gray-300 p-10 mt-10 rounded-xl text-gray-800">
                <div className="w-[90%] m-auto md:w-full">
                    <h1 className="font-semibold text-3xl">Welcome to Booqlet.</h1>
                    <p className="font-light text-gray-400 text-sm mb-5">Sign up to start management.</p>
                </div>
                <form className="flex flex-col w-[90%] m-auto md:w-full">
                    <div className="flex flex-col md:flex-row">
                        <div className=" md:mr-6 md:w-[200px]">
                            <label htmlFor="firstName" className="font-medium">First name</label>
                            <input type="text" name="firstName" placeholder="First name.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                        </div>
                        <div className=" md:w-[200px]">
                            <label htmlFor="lastName" className="font-medium">Last name</label>
                            <input type="text" name="lastName" placeholder="Last name.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                        </div>
                    </div>
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                    <label htmlFor="displayName" className="font-medium">Display name</label>
                    <input type="text" name="displayName" placeholder="ExampleBrand.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/> 
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input type="password" name="password" placeholder="*******" className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                    <button className="rounded-full bg-gray-900 py-2 px-8 capitalize text-white text-base duration-500 shadow-md shadow-slate-50 hover:shadow-slate-400  hover:scale-105" type="submit">Sign up</button>
                </form>
                <div className="flex justify-center items-center mt-5">
                    <p className="font-light text-gray-400 text-sm mr-2">Already have an account?</p>
                    <Link href={'/login'}>
                        <button className="text-sm font-medium cursor-pointer hover:scale-110 duration-500">Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Register