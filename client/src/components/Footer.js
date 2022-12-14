import React from 'react'
import {ImFacebook2} from 'react-icons/im'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BiCopyright} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer  className="fixed inset-x-0 bottom-0 flex items-center bg-black w-full p-4 md:py-2 md:px-6 flex-row">
   <div className='flex flex-row w-[85%]'>
      <ImFacebook2 className="text-5xl text-white cursor-pointer m-5" />
        <p className="text-lg text-white "></p>

        <AiFillInstagram className="text-5xl  text-white cursor-pointer m-5" />
        <p className="text-lg text-white "></p>
  
        <AiOutlineTwitter className="text-5xl  text-white cursor-pointer m-5" />
        <p className="text-lg text-white  "></p>
        
        

    </div>
    <div className='m-auto flex flex-row'>
    <BiCopyright className="text-5xl text-white cursor-pointer mx-3" />
        <p className="text-xl my-2 text-white"> Sadaf Shahid</p>
    </div>
    
   
    </footer>
  )
}

export default Footer