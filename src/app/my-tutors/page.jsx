import DeleteBooking from '@/components/DeleteBooking';
import MyTutorCard from '@/components/MyTutorCard';
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
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`)
    const data = await res.json();

    if(data.length === 0){
      return <div className='flex justify-center mt-10'>
        <Link href={"/tutors"}><Button className='bg-blue-400 text-center'>please book a tutor</Button></Link>
      </div>
    }
    
    
  return (
  <div className="max-w-300 mx-auto">
    {!user ? (
      <div className="flex justify-center items-center mt-10">
        <Link href="/login">
          <Button>Login First</Button>
        </Link>
      </div>
    ) : 
      <div>{data.map(d=> <MyTutorCard key={d._id} data={d}></MyTutorCard>)}</div>
    }
  </div>
);
}

export default MyTutorPage