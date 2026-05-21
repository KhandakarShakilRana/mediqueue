"use client"
import { Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

const DeleteBooking = ({data}) => {
    const handleCancle = async()=>{
          const res = await fetch(`http://localhost:5000/bookings/${data?._id}`,{method: "DELETE",
            headers:{
              "content-type": "application/json",
            }
        });
        const result = await res.json();
        toast("sucessfully deleted")
        redirect("/my-tutors")
    }
  return (
    <div><Button variant='danger' onClick={handleCancle}>delete</Button></div>
  )
}

export default DeleteBooking