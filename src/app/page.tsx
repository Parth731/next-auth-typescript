"use client";
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import LoginComp from "@/components/LoginComp";
import { useSession } from "next-auth/react";

export default function Home() {
  // const session = await getServerSession(options);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  if (session) redirect("/dashboard");

  return (
    <main>
      {/* <LoginForm /> */}
      <LoginComp />
    </main>
  );
}
