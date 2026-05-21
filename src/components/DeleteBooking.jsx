"use client"
import { Button } from '@heroui/react';
import React from 'react'

const DeleteBooking = ({data}) => {
    const handleCancle = async()=>{
          const res = await fetch(`http://localhost:5000/bookings/${data?._id}`,{method: "DELETE",
            headers:{
              "content-type": "application/json",
            }
        });
        const result = await res.json();
    }
    console.log(data);
  return (
    <div><Button onClick={handleCancle}>delete</Button></div>
  )
}

export default DeleteBooking