"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      {/* <Image src="/mylogo.png" width={245} height={102} alt="logo" /> */}
      <Image src="/chartgpt.png" width={300} height={300} alt="logo" />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn("google")}
      >
        Sign In to use ChartGPT
      </button>
    </div>
  );
};

export default Login;
