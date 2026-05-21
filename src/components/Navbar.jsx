"use client";
import UserProfile from "@/app/profile/page";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  // const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/login")
  };
  const navLink = (path) =>
    pathname === path
      ? "bg-blue-500 text-white px-3 py-2 rounded-md"
      : "px-3 py-2";
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-4 ">
      <div className="text-2xl font-bold">Medi<span className="text-blue-400">Queue</span></div>
      <div>
        <ul className="flex justify-between items-center gap-3 text-sm">
          {user ? (
            <>
              <Link href={"/profile"}><Avatar className="w-7 h-7">
                        <Avatar.Image
                          alt={user?.name}
                          src={user?.image}
                        />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                      </Avatar></Link>
                <button className="text-sm bg-red-500 p-2 rounded-md text-white font-semibold" variant="danger" onClick={handleSignOut}>LogOut</button>
              
              
              
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
    <ul className="sm:w-120 mx-auto flex justify-between text-sm gap-4">
        <Link href={"/"}>
          <li className={navLink("/")}>Home</li>
        </Link>
        <Link href={"/tutors"}>
          <li className={navLink("/tutors")}>Tutors</li>
        </Link>
        <Link href={"/add-tutor"}>
          <li className={navLink("/add-tutor")}>Add Tutor</li>
        </Link>
        <Link href={"/my-tutors"}>
          <li className={navLink("/my-tutors")}>My Tutors</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
