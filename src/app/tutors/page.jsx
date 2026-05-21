import TutorCard from '@/components/TutorCard';
import Link from 'next/link';
import React from 'react'

const TutorPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`)
    const data = await res.json();
  return (
    <div className='max-w-300 mx-auto'>
        <TutorCard data={data}></TutorCard>
            
            
           
    </div>
  )
}

export default TutorPage