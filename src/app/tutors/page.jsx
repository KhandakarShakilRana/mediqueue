import Link from 'next/link';
import React from 'react'

const TutorPage = async () => {
    const res = await fetch("http://localhost:5000/tutors")
    const data = await res.json();
  return (
    <div>
        {data.map(d=> <div key={d._id}>{d.tutorName}
            <p>{d.location}</p>
            <p>{d.subject}</p>
            
            
           <Link href={`/tutors/${d._id}`}> <button className='p-4 bg-yellow-200'>detail</button></Link>
        </div>)}
    </div>
  )
}

export default TutorPage