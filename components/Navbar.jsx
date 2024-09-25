"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { status } = useSession();
  const router = useRouter();
  return (
    <div className="font-bold flex px-2 py-4 justify-between items-center border-b">
      <Link href="/">
      <h1>VMM</h1>
      </Link>
      {status === "authenticated" && (
        <button
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });
          }}
        >
          Çıkış
        </button>
      )}
    </div>
  );
};

export default Navbar;
