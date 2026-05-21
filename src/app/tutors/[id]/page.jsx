
import BookingCard from '@/components/BookingCard';
import { DeleteTutor } from '@/components/DeleteTutor';
import { EditModal } from '@/components/EditModal';
import React from 'react'

const TutorDetailPage = async({params}) => {
    const {id} = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`)
    const data = await res.json();
   
    
  return (
    <div className='max-w-300 mx-auto'>
        <div className='flex flex-col lg:flex-row gap-6 '>
          <div>
          <img src={`${data.imageUrl}`} alt="" />
        </div>
        <div className='space-y-2 mb-4'>
          <h1 className='font-bold text-4xl text-center'>{data.tutorName}</h1>
          <h1>{data.institutionExperience}</h1>
          <h1>Subject : {data.subject}</h1>
          <h1>Based on : {data.location}</h1>
          <h1>Fee : <span className='font-bold'>${data.fee}</span></h1>
          <h1>Total Slot : <span className='font-bold'>{data.totalSlot}</span></h1>
          <h1>Session Start Date : {data.sessionStartDate}</h1>
          <h1>Start Time : {data.startTime}</h1>
          <h1>End Time : {data.endTime}</h1>
        </div>
        </div>
            <div className='flex'>
              <EditModal data={data}></EditModal>
            <DeleteTutor  data={data}/>
            </div>
            <div>
              <BookingCard data={data}></BookingCard>
            </div>
            
        
    </div>
  )
}

export default TutorDetailPage