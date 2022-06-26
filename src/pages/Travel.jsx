import React from 'react'

import Caelid2 from '../assets/caelid2.jpg'
import Rzeszow from '../assets/rzeszow.jpg'
import Stormwind from '../assets/stormwind.jpg'
import Stormwind2 from '../assets/stormwind2.jpg'
import Stormwind3 from '../assets/stormwind3.jpg'
import SelectsCard from './SelectsCard'

const Travel = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={Rzeszow} text='Rzeszów' />
    <SelectsCard bg={Caelid2} text='Caelid' />
    <SelectsCard bg={Stormwind} text='Stormwind' />
    <SelectsCard bg={Stormwind2} text='Stormwind' />
    <SelectsCard bg={Stormwind3} text='Stormwind' />



    </div>
  )
}
export default Travel