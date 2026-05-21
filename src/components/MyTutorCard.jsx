import React from 'react'
import DeleteBooking from './DeleteBooking'

const MyTutorCard = ({data}) => {
  return (
    <div className='max-w-full mx-auto flex mt-10 gap-4 justify-between items-center shadow-sm px-10 py-10'>
          <div className='flex items-center gap-5'>
            <img className='w-20 h-20 rounded-full' src={`${data.userImage}`} alt="" />
          <div>
            <h1>{data.userName}</h1>
            <h1>{data.userSubject}</h1>
          </div>
          </div>
          <DeleteBooking data={data}></DeleteBooking>
    </div>
  )
}

export default MyTutorCard