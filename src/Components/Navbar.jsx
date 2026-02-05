import React, { use, useState } from 'react'
import OverlayMenu from './OverlayMenu.jsx';
import logo from '../assets/logo.png';
import { CiMenuFries } from "react-icons/ci";
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Navbar() {
const [menuOpen, setMenuOpen]= useState(false);
const [visible ,setVisible]= useState(true);
const [forceVisible, setForceVisible]= useState(false); /// jb home page visible ho tb navbar visible rhe
  

const lastScrollY= useRef(0); // jo bhi hm scroll kr rhe h uska last position store krne k liye
const timerId= useRef(null); /// timeout id store krne k liye jisse hm navbar ko auto hide kr paye

useEffect(()=>{
  const homeSection= document.getElementById('#home');
  const observer= new IntersectionObserver(([entry])=>{
    if(entry[0].isIntersecting){
      setForceVisible(true); // jb home section visible hoga tb navbar visible rhega
    }
    else{
      setForceVisible(false); // jb home section visible nhi hoga tb scroll based visibility pr depend krega
    }
  }, {threshold:0.1} // 10% of home section visible hoga to consider krna
)
if(homeSection){ // if home section exist krta h to hi observe krna start krna
  observer.observe(homeSection);

}
return()=>{
  if(homeSection){
    observer.unobserve(homeSection); // cleanup krna jb component unmount ho jaye
  }
}
},[]) // run only once on mount

 useEffect(()=>{
  const handleScroll=()=>{
    if(forceVisible){
      setVisible(true); // jb home section visible h to navbar visible rhega
      return;
    }
    const currentScrollY= window.scrollY;
    if(currentScrollY < lastScrollY.current){
      setVisible(true); // scrolling up kr rhe h to navbar show krdo
    }
    else{
      setVisible(false); // scrolling down kr rhe h to navbar hide krdo
      if(timerId.current){
        clearTimeout (timerId.current); // previous timeout clear krdo
      }
      timerId.current= setTimeout(()=>{
        setVisible(true); // 3 seconds baad navbar show krdo
      },3000);  

    }
    lastScrollY.current= currentScrollY; // update last scroll position
  };

  window.addEventListener('scroll', handleScroll , {passive:true});
  return()=>{
    window.removeEventListener('scroll', handleScroll);// cleanup krdo jb component unmount ho jaye
    if(timerId.current){
      clearTimeout(timerId.current); // timeout bhi clear krdo
    }
  };

})




  return (
    <>
    <nav className={'fixed top-0 left-0 w-full flex items-center justify-between lg:px-10 py-4 z-50 sm:px-2 transition-transform duration-300 '}>
  <div className=' flex items-center '>
    <img src={logo} alt="Logo" className="   lg:w-60 lg:h-30 h-20 w-30  "/>
{/* <div className='text-bold text-xl text-white hidden sm:block'>
  Rajveer Pratap Singh
</div> */}
  </div>

  <div className=' flex flex-row lg:gap-10 sm:gap-1 '>
   <button 
   onClick={()=>{ setMenuOpen(true);
   }}
   className=' text-3xl focus:outline-none '
   >

   <CiMenuFries />
   </button>
  

  {/* <div className=' flex items-center  space-x-4 '>
    <a href="#contact" 
    className='bg-linear-to-r  from-pink-400 t0-blue-500 px-5 text-white py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300  '>
      Reach Out
      </a>
  </div> */}
  </div>
    </nav>
      <OverlayMenu isOpen={menuOpen} onClose={()=> setMenuOpen(false)} />
    </>
  )
}

