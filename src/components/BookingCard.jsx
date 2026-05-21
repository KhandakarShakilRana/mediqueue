"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react'

const BookingCard = ({data}) => {
    const { data: session } = authClient.useSession();
          const user = session?.user;
     const handleBooking = async()=>{
      const bookingData = {
        userId : user.id,
        userImage: data.imageUrl,
        userName : data.tutorName,
        userStartDate: data.sessionStartDate,
        userStartTime: data.startTime,
        userEndTime: data.endTime,
        userSubject: data.subject,
        userLocation: data.location,
        userFee: data.fee,
        userTotalSlot: data.totalSlot,
      }
      const res = await fetch("http://localhost:5000/bookings",{method : "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData)
    })
    const result = await res.json();
    console.log(result);
    
    }
  return (
    <div>
        <Button onClick={handleBooking}>Booking</Button>
    </div>
  )
}

export default BookingCard