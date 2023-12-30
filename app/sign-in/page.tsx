"use client";
import LoginForm from "@/components/Admin-Components/LoginForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center bg-theme-2 justify-center w-full h-auto p-4 gap-4">
      <LoginForm redirect={router} key="hello" />
      <h1 className="rounded-sm p-2 bg-theme-4 font-medium text-lg">
        Don't have a account{" "}
        <Link
          className="hover:underline font-semibold text-red-600"
          href="/sign-up"
        >
          Click here to create one
        </Link>
      </h1>
    </div>
  );
};

export default page;
