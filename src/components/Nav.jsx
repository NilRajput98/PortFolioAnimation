
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='w-full  flex justify-center pt-5 fixed  z-[1000] opacity-70 '>
      
      <nav className='bg-[#5E6572] w-fit px-1  md:w-[70%] lg:w-fit lg:px-1 lg:h-16  rounded-full h-12 flex justify-center items-center gap-4 lg:gap-24 border-[3px] border-[#1C2321] '>

       
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${isActive ? 'bg-white' : 'bg-[#e2e1e1]'} 
            flex justify-center items-center h-9 px-5 lg:h-12  lg:px-10 rounded-full text-sm cursor-pointer border-[1px] border-[#1C2321]`
          }
        >
          Home
        </NavLink>

        {/* Profile Tab */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${isActive ? 'bg-white' : 'bg-[#e2e1e1]'} 
            flex justify-center items-center h-9 px-5 lg:h-12 lg:px-10 rounded-full text-sm cursor-pointer border-[1px] border-[#1C2321]`
          }
        >
          Profile
        </NavLink>

        {/* Contact Tab */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? 'bg-white' : 'bg-[#e2e1e1]'} 
            flex justify-center items-center h-9 px-5 lg:h-12 lg:px-10 rounded-full text-sm cursor-pointer border-[1px] border-[#1C2321]`
          }
        >
          Contact
        </NavLink>

      </nav>
    </div>
  );
}

export default Nav;
