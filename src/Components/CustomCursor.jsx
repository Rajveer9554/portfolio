import React, { useEffect, useState } from 'react'

function CustomCursor() {
const [positions,setPositions]= useState({x:0,y:0});

// jaha jaha mouse jayega waha waha update krega
useEffect(()=>{
  const moveHandler=(e)=>{
    setPositions({x:e.clientX,y:e.clientY});
  };
  window.addEventListener('mousemove',moveHandler); // it will track the mouse movement and call moveHandler function
  return()=>{
    window.removeEventListener('mousemove',moveHandler); // cleanup function to remove the event listener
  };
});

  return (

    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]"
    style={{
      transform:`translate3d(${positions.x-40}px, ${positions.y-40}px,0)`,}} // jaha jaha mouse jayega waha waha cursor ko le jayega aur div ko
    >

      <div  className='w-20 h-20 rounded-full bg-linear-to-r from-yellow-600 to-purple-300 opacity-80 blur-3xl '/>
      
    </div>
  )
}

export default CustomCursor
