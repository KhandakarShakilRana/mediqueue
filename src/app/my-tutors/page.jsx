import DeleteBooking from '@/components/DeleteBooking';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react'

const MyTutorPage = async() => {
    const session = await auth.api.getSession({
    headers: await headers() 
})
    const user = session?.user;
    
    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`)
    const data = await res.json();

    
    
  return (
    <div>
      {
        user ? <div>
      {
      data.map(d=> <div key={d._id}>{d.userName}
      <DeleteBooking data={d}></DeleteBooking>
      </div>)
      }
      </div> : <div className='flex justify-center items-center mt-10'>
          <Link href={"login"}><Button>Login First</Button></Link>
        </div>
      }
      
      </div>
  )
}

export default MyTutorPage