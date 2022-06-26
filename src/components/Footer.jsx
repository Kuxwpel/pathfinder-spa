import React from 'react'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import {Link} from 'react-router-dom'


const Footer = () => {
    
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                 <h1><Link to="/">PATHFINDER.</Link></h1>
               
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook className='icon' />
                <FaTwitter className='icon' />
                <FaYoutube className='icon' />
                <FaInstagram className='icon' />
                </div>
            </div>     
                
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                 <li><Link to="about">About</Link></li>
                    <li><Link to="partnerships">Partnerships</Link></li>
                    <li><Link to="careers">Careers</Link></li>
                    <li><Link to="newsroom">Newsroom</Link></li>
                    <li><Link to="advertising">Advertising</Link></li>
                </ul>
                <ul className='text-right lg:flex'>
               <li><Link to="/">Home</Link></li>
               <li><Link to="destinations">Destinations</Link></li>
                <li><Link to="travel">Travel</Link></li>
                <li><Link to="view">View</Link></li>
                <li><Link to="book">Book</Link></li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Footer