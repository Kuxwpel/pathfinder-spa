import React from 'react'


import Caelid2 from '../assets/caelid2.jpg'
import Rzeszow from '../assets/rzeszow.jpg'
import Stormwind from '../assets/stormwind.jpg'
import Stormwind2 from '../assets/stormwind2.jpg'
import Stormwind3 from '../assets/stormwind3.jpg'

const Destinations = () => {
  return (
    <div className='nax-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>Pick your poison</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4' >
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Rzeszow} alt="/" title='Rzeszów'/>
            <img className='w-full h-full object-cover' src={Caelid2} alt="/" title='Caelid' />
            <img className='w-full h-full object-cover' src={Stormwind} alt="/" title='Stormwind' />
            <img className='w-full h-full object-cover' src={Stormwind2} alt="/" title='Stormwind' />
            <img className='w-full h-full object-cover' src={Stormwind3} alt="/" title='Stormwind' />
        </div>
    </div>
  )
}
export default Destinations