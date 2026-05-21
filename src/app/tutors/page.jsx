import TutorCard from '@/components/TutorCard';
import Link from 'next/link';
import React from 'react'

const TutorPage = async () => {
    const res = await fetch("http://localhost:5000/tutors")
    const data = await res.json();
  return (
    <div>
        <TutorCard data={data}></TutorCard>
            
            
           
    </div>
  )
}

export default TutorPage