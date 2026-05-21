import { Separator } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

const TutorCard = ({data}) => {
  return (
    <div className='p-4 mx-auto space-y-4 sm:grid sm:grid-cols-3 gap-4'>
       {data.map(d=> <div className='w-75 shadow-sm p-4' key={d._id}>
        <div><img src={`${d.imageUrl}`} alt="" /></div>
        <h1 className='text-center font-bold my-2'>{d.tutorName}</h1>
        <div className='flex justify-between'>
            <div><h1>Subject : {d.subject}</h1>
            <h1>Based on : {d.location}</h1></div>
           
            <div><h1 className='text-right'>Fee : ${d.fee}</h1>
            <h1 className='text-right'>Total Slot : {d.totalSlot}</h1>
            </div>
        </div>
        <h1>Session Start Date : {d.sessionStartDate}</h1>
        <Link href={`/tutors/${d._id}`}><button className='bg-blue-400 w-full my-2 rounded-2xl'>Details</button></Link>
        </div>)}
    </div>
  )
}

export default TutorCard