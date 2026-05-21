"use client"
import AddTutor from '@/components/AddTutor'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react'

const AddTutorPage = () => {
  const { data: session } = authClient.useSession();
    const user = session?.user;
  return (
    <div>
      {
        user ? <AddTutor></AddTutor> : <div className='flex justify-center items-center mt-10'>
          <Link href={"/login"}><Button>Login First</Button></Link>
        </div>
      }
    </div>
  )
}

export default AddTutorPage