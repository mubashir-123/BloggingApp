import React, { useRef } from 'react'
import { auth } from '../../Config/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const password = useRef();
  const confirm_password = useRef();
  const navigate = useNavigate(); 
  

  const SignupHandler = (e)=>{
    e.preventDefault()
    if (password.current.value !== confirm_password.current.value) {
      alert("Passwords do not match");
      return;
    }
  
    console.log(first_name.current.value);
    console.log(last_name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(confirm_password.current.value);
    console.log('---------------------------------')


   // first_name.current.value,last_name.current.value,,confirm_password.current.value
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate('/SignIn');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    // ..
  });

  }

  const login = ()=>{
    navigate('/SignIn');
  }

  return (
    <>

    <h1 className='text-center mt-10 text-gray-600 text-3xl'><b>Sign Up</b></h1> 

    <form onSubmit={SignupHandler}  className='flex flex-col flex-wrap items-center gap-3 py-5 pb-[2.5%]'>

      <label className="input input-bordered flex items-center gap-2 w-72">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="text" className="grow" placeholder="First Name" minLength={3} maxLength={20} ref={first_name}/>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-72">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="text" className="grow" placeholder="Last Name" minLength={1} maxLength={20} required ref={last_name}/>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-72">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        <input type="email" className="grow" placeholder="Email" required ref={email}/>
      </label>
      
      <label className="input input-bordered flex items-center gap-2 w-72">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
        <input type="password" className="grow" placeholder='Password' required minLength={8} pattern='(?=.*[a-z])(?=.*[A-Z]).{8,}' title="Must contain at least one uppercase and lowercase letter, and at least 8 or more characters" ref={password}/>
      </label>
      
      <label className="input input-bordered flex items-center gap-2 w-72">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
        <input type="password" className="grow" placeholder='Confirm Password' minLength={8} required ref={confirm_password}/>
      </label>

      <button type='submit' className="btn btn-neutral w-72 text-xl flex items-center">Sign Up</button>

      <p className='text-center text-sm mt-2'>Registered already?<span className='cursor-pointer text-center text-sm ml-28' onClick={login}><u>SignIn</u></span></p>
    </form>  
    </>
  )
}

export default Signup