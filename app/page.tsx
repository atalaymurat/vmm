"use client";
import Login from "@/components/Login";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
    if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <>
          <Login />
        </>
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>{showSession()}</div>
    </main>
  );
}
