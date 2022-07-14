import Link from "next/link"
import Layout from "../components/Layout"

const Login = () => {
  return (
    <Layout>
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="shadow-md shadow-gray-300 p-10 rounded-xl text-gray-800">
                <div className="w-[90%] m-auto md:w-full">
                    <h1 className="font-semibold text-3xl">Welcome back</h1>
                    <p className="font-light text-gray-400 text-sm mb-5">Login to start management.</p>
                </div>
                <form className="flex flex-col mb-5 w-[90%] m-auto md:w-full">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input type="password" name="password" placeholder="*******" className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                    <p className="w-full text-right mb-5 text-sm font-medium cursor-pointer hover:scale-110 hover:pr-3 duration-500">Forgot password</p>
                    <button className="rounded-full bg-gray-900 py-2 px-8 capitalize text-white text-base duration-500 shadow-md shadow-slate-50 hover:shadow-slate-400  hover:scale-105" type="submit">Login</button>
                </form>
                <div className="flex justify-center items-center">
                    <p className="font-light text-gray-400 text-sm mr-2">Don't have an account yet?</p>
                    <Link href={'/register'}>
                        <button className="text-sm font-medium cursor-pointer hover:scale-110 duration-500">Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Login