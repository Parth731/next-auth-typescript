import { options } from "@/app/api/auth/[...nextauth]/options";
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);

  if (session) redirect("/dashboard");

  return (
    <main>
      <LoginForm />
    </main>
  );
}
