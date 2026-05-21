"use client";
import UserProfile from "@/app/profile/page";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/login")
  };
  return (
    <div className="flex justify-between">
      <div>MediQueue</div>
      <ul className="flex justify-between">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/tutors"}>
          <li>Tutors</li>
        </Link>
        <Link href={"/add-tutor"}>
          <li>Add Tutor</li>
        </Link>
        <Link href={"/my-tutors"}>
          <li>My Tutors</li>
        </Link>
      </ul>
      <div>
        <ul className="flex justify-between">
          {user ? (
            <>
              <Link href={"/profile"}><Avatar>
                        <Avatar.Image
                          alt={user?.name}
                          src={user?.image}
                        />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                      </Avatar></Link>
                <Button onClick={handleSignOut}>LogOut</Button>
              
              
              
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <li>Login</li>
              </Link>
              <Link href={"/signup"}>
                <li>Sign Up</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
