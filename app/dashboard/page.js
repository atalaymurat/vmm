"use client"
import React from "react";
import { useSession } from "next-auth/react";

import Register from "@/components/Register";

const index = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        <h1>Dashboard || Index</h1>
        <div>{session?.user?.email}</div>
        <Register />
      </div>
    );
  } else if (status === "loading") {
    return <span>Loading...</span>;
  } else {
    return;
  }
};

export default index;
