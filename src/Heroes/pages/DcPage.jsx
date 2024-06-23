import React from 'react'
import { HeroComponent } from '../components/HeroComponent';


export const DcPage = ({ searchTerms }) => {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-5 text-3xl font-bold'>Dc Comics</h1>
      <hr className='mb-10' />
      <div className='flex justify-center items-center'>
      <HeroComponent searchTerms={ searchTerms } publisher={'DC Comics'} />
      </div>

     

    </div>
  )
}
