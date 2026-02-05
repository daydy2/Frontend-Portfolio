import React from 'react'
import { contact } from '../constants'
import mobiledesign from "../img/Frame 56906.svg"
const Contactme = () => {
  return (
    
 
    <div className='mt-[4rem] mx-[1rem] sm:mx-[0rem]'>
        <div className='flex justify-center items-center my-auto mx-0'>
        <h1  className='  flex justify-center items-center  py-[0.125rem] px-[0.5rem] w-fit text-center text-[#EF5DA8] text-[0.625rem] font-medium leading-[1.25rem] md:leading-[1.25rem] font-Inter bg-[#FDEFF6] border-solid rounded-2xl border-[#FACDE4]'>{contact}</h1>
        </div>
        <h1 className='mt-[1.2rem] text-[#101828] font-Inter  text-center text-[1.5rem] md:text-[2.25rem] font-semibold  md:font-semibold leading-[2.75rem] tracking-[-0.03rem] md:tracking-[-0.045rem] '>I’d love to hear from you</h1>
        <p className=' mb-[1rem] md:mb-[5rem] text-[#475467] text-center text-[0.875rem] font-Inter font-normal leading-[normal] md:leading-[1.875rem] md:text-[1.25rem]'>Got a question or proposal? or just want to say hello? <span className='text-black font-semibold'> Go ahead</span></p>
        <div className='flex justify-center items-center my-0 mx-[1rem] md:mx-[5.94rem]'>
        <img  src={mobiledesign} alt="" />
        </div>
    </div>
  )
}

export default Contactme