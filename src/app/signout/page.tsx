"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <div onClick={() => signOut()} className="cursor-pointer">
      SignOut
    </div>
  );
};

export default SignOut;
