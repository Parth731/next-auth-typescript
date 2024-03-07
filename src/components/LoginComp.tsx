"use client";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const LoginComp = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/auth/custom-login")}>
      <h1>Login</h1>
    </div>
  );
};

export default LoginComp;
