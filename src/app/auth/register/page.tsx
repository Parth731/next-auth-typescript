import { options } from "@/app/api/auth/[...nextauth]/options";
import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await getServerSession(options);

  if (session) redirect("/dashboard");

  return <RegisterForm />;
}
