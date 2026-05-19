import { DeleteTutor } from '@/components/DeleteTutor';
import { EditModal } from '@/components/EditModal';
import React from 'react'

const TutorDetailPage = async({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:5000/tutors/${id}`)
    const data = await res.json();
  return (
    <div>
        
            <p>{data.tutorName}</p>
            <p>{data.location}</p>
            <p>{data.subject}</p>
            <p>{data.fee}</p>
            <p>{data.totalSlot}</p>
            <p>{data.sessionStartDate}</p>
            <p>{data.startTime}</p>
            <p>{data.endTime}</p>
            <p>{data.imageUrl}</p>
            <p>{data.institutionExperience}</p>
            <EditModal data={data}></EditModal>
            <DeleteTutor  data={data}/>
        
    </div>
  )
}

export default TutorDetailPage