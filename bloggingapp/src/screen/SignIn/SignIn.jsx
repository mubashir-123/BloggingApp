import React, { useRef } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const SignipHandler = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/Dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  }

  const register = ()=>{
    navigate('/Signup');
  }
  return (
    <>

      <h1 className='text-center mt-16 text-gray-600 text-3xl'><b>Sign In</b></h1>

      <form onSubmit={SignipHandler} className='flex flex-col flex-wrap items-center gap-3 py-10 pb-[13.5%]'>

        <label className="input input-bordered flex items-center gap-2 w-72">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="email" className="grow" placeholder="Email" required ref={email} />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-72">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow" placeholder='Password' required minLength={8} pattern='(?=.*[a-z])(?=.*[A-Z]).{8,}' title="Must contain at least one uppercase and lowercase letter, and at least 8 or more characters" ref={password} />
        </label>

        <button type='submit' className="btn btn-neutral w-72 text-xl flex items-center">Sign In</button>

         <p className='text-center text-xs mt-2'>Are you registered?<span className='cursor-pointer text-center text-xs ml-20' onClick={register}><u>SignUp Now</u></span></p>
      </form>
         
    </>
  )
}

export default SignIn