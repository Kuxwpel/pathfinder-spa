import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Book = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Animi quo ex ducimus! Eos quibusdam, aut porro, error eligendi,
                      asperiores soluta iste autem labore repellendus nam in eaque?
                       Repellendus, repudiandae accusamus eos nulla magnam beatae ab blanditiis,
                        ea culpa sequi repellat, totam animi dolorum! Impedit ullam consequuntur
                         nesciunt eos voluptatum nihil, laborum odio quo aspernatur harum eligendi,
                          dolorem corrupti assumenda aliquam. Id illum optio odit voluptas ratione quia 
                          beatae provident dicta minus sit esse explicabo aliquid inventore labore obcaecati 
                          cumque, exercitationem nam perspiciatis doloremque cum vel temporibus. Laborum minima
                           est iste voluptatum nobis fugit, necessitatibus accusamus, nostrum iure esse recusandae officiis!
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill size={50} />
                    </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>

                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={50} />
                    </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>

                    </div>
                
            </div>
        </div>


        <div>
            <div className='border text-center'>
                <p className='py-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
       
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label>Destination</label>
                <select className='border rounded-md p-2'>
                    <option>Rzeszów</option>
                    <option>Caelid</option>
                    <option>Stormwind</option>
                </select>
            </div>
            <div className='flex flex-col my-2'>
                <label>Check-In</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col my-2'>
                <label>Check-Out</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <button className='w-full my-4'>Rates & Availabilities</button>
        </form>
        </div>
    </div>
  )
}
export default Book