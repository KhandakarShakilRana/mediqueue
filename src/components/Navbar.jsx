import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div>MediQueue</div>
        <ul className='flex justify-between'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/tutors"}><li>Tutors</li></Link>
            <Link href={"/add-tutor"}><li>Add Tutor</li></Link>
            <Link href={"/my-tutors"}><li>My Tutors</li></Link>
        </ul>
        <div>
           <ul className='flex justify-between'>
            <Link href={"/profile"}><li>Profile</li></Link>
            <Link href={"/login"}><li>Login</li></Link>
            <Link href={"/signup"}><li>Sign Up</li></Link>
        </ul>
        </div>
    </div>
  )
}

export default Navbar