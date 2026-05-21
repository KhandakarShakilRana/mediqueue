import DeleteBooking from '@/components/DeleteBooking';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react'

const MyTutorPage = async() => {
    const session = await auth.api.getSession({
    headers: await headers() 
})
    const user = session?.user;
    
    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`)
    const data = await res.json();

    
    
  return (
    <div>{
      data.map(d=> <div key={d._id}>{d.userName}
      <DeleteBooking data={d}></DeleteBooking>
      </div>)
      }</div>
  )
}

export default MyTutorPage