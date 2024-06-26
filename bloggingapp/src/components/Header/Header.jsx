import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Config/firebaseConfig'
import { signOut } from 'firebase/auth'

const Header = () => {

  const navigate = useNavigate();

const Logout = ()=>{
  signOut(auth).then(() => {
    console.log('Signout successfully')
      navigate('/SignIn');
  }).catch((error) => {
      console.log(error);
  });

}  
  
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Blogging App</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to = 'Profile' className="justify-between">
                  Profile
                </Link>
              </li>
              <li><Link to = 'Dashboard'>Dashboard</Link></li>
              <li><Link to = '/' onClick={Logout}>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header