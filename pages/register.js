import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../lib/context"
import toast, {Toaster} from "react-hot-toast"
import Layout from "../components/Layout"
import { auth, firestore, serverTimestamp } from "../lib/firebase"
import PasswordStrengthBar from "react-password-strength-bar"

const Register = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [brandName, setBrandName] = useState()
  const [password, setPassword] = useState()
  const {user} = useContext(AppContext)
  const router = useRouter()

  useEffect(() => {
    user && router.push(`/dashboard/${user.uid}`)
  }, [user])

  const submitRegistration = () => {
    const data = {
        firstName,
        lastName,
        email,
        brandName,
        createdAt: serverTimestamp()
    }

    auth.createUserWithEmailAndPassword(email, password).then((user) => {
        user.user.sendEmailVerification()
        user.user.updateProfile({
            displayName: `${firstName} ${lastName}`
        })
        createUserDocument(user.user.uid, data).then(() => {
            toast.success('Registration successful.')
        })
        .catch((error) => {
            toast.error('Registration failed.')
            console.log(error)
        })
    })
    .catch((error) => {
        console.log(error)
    })
  }

  const createUserDocument = (uid, data) => {
    return firestore.doc(`users/${uid}`).set(data)
  }

  return (
    <Layout>
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="shadow-md shadow-gray-300 p-10 mt-10 rounded-xl text-gray-800">
                <div className="w-[90%] m-auto md:w-full">
                    <h1 className="font-semibold text-3xl">Welcome to Booqlet.</h1>
                    <p className="font-light text-gray-400 text-sm mb-5">Sign up to start management.</p>
                </div>
                <form className="flex flex-col w-[90%] m-auto md:w-full" onSubmit={(e) => {
                    e.preventDefault();
                    submitRegistration()}}>
                    <div className="flex flex-col md:flex-row">
                        <div className=" md:mr-6 md:w-[200px]">
                            <label htmlFor="firstName" className="font-medium">First name</label>
                            <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" placeholder="First name.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                        </div>
                        <div className=" md:w-[200px]">
                            <label htmlFor="lastName" className="font-medium">Last name</label>
                            <input onChange={(e) => setLastName(e.target.value)} type="text" name="lastName" placeholder="Last name.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                        </div>
                    </div>
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="example@gmail.com.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                    <label htmlFor="brandName" className="font-medium">Display name</label>
                    <input onChange={(e) => setBrandName(e.target.value)} type="text" name="brandName" placeholder="ExampleBrand.." className="mb-5 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/> 
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="*******" className="mb-1 w-full bg-gray-100 rounded-md text-gray-800 font-light duration-500 py-1 px-2 text-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none active:outline-none" required/>
                    <div className="mb-5">
                        <PasswordStrengthBar password={password} scoreWordStyle={{color: 'rgb(156 163 175)', fontWeight: '300'}} barColors={['#f3f4f6', '#ef4836', '#f6b44d', '#2b90ef', '#25c281']} shortScoreWord={'Too short.'} scoreWords={['Very weak.', 'Weak.', 'Good.', 'Better.', 'Strong.']} minLength={6}/>
                    </div>
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
        <Toaster/>
    </Layout>
  )
}

export default Register