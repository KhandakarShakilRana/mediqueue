"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const UserProfile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
   const handleSignOut = async () => {
      await authClient.signOut();
      redirect("/login")
    };
  return (
    <div>
      <div className="mt-10 mx-auto w-90 py-10 px-4 rounded-xl space-y-2 shadow-sm">
        <div className="flex justify-center mb-6">
          <Avatar className="w-30 h-30 rounded-full">
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        </div>
        <h1>Name : {user?.name}</h1>
        <p>Email :{user?.email}</p>
         <Button variant="danger" onClick={handleSignOut}>LogOut</Button>
      </div>
    </div>
  );
};

export default UserProfile;
