import React from 'react'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
    <div className="py-2 bg-gray-300">
      <div className="max-w-[1320px] m-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <Link to="/">
            <img src={logo} alt="logo" className='w-8 h-8 '/>
            </Link>
          </div>
          <div className="">
            <ul className='flex gap-x-6'>
              <Link to="/">
              <li className='text-base '>Home</li>
              </Link>
              <Link to="/signup">
              <li className='text-base '>SignUp</li>
              </Link>
              <Link to="/login">
              <li className='text-base '>Login</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <button className='py-3 px-4 bg-[#261848] rounded-lg text-md font-bold text-white '>Signup</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Header