import React from 'react'
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer  className=" bg-black border-y border-2">
            <div className="mx-auto w-full max-w-screen-xl lg:mb-5 mb-5 md:mb-3 px-4 md:px-6 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-between mt-10">
                    <span className="text-sm text-white sm:text-center">
                        
                        <a href="https://instagram.com/__rajveer_pra_14/" className="hover:text-blue-600">
                            __rajveer_pra_14
                        </a>
                        . Follow Us
                    </span>
                    
                      <h1  className='text-xl font-bold animate-pulse text-blue-500'>
                        
                       ❤️❤️ Thank you for visiting my portfolio!
                      </h1>
                      
                  
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                         <span className=" flex gap-5 text-sm text-white sm:text-center">
                        
                        <a href="https://github.com/Rajveer9554" className="hover:text-blue-600">
                            Rajveer Github
                        </a>
                        <FaGithub size={20} className="hover:text-yellow-400 transition-colors duration-300" />
                    </span>
                        
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
