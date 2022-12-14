import React from 'react'
import Header from './Header'
import {ImFacebook2} from 'react-icons/im'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Contact = () => {
  return (
 
       <div className="w-full h-auto flex flex-col items-center justify-center bg-yellow-400 m-5">
      <Header />
      <div className='flex flex-row items-center justify-center'>
      <h1 className="text-3xl"> Contact Us</h1>
      <ImFacebook2 className="text-3xl text-textColor cursor-pointer m-5" />
        <p className="text-lg ">www.facebook.com</p>

        <AiFillInstagram className="text-3xl text-textColor cursor-pointer m-5" />
        <p className="text-lg ">www.instagram.com</p>
  
        <AiOutlineTwitter className="text-3xl text-textColor cursor-pointer m-5" />
        <p className="text-lg ">www.twitter.com</p>
     
       </div>
    </div>
 
  )
}

export default Contact