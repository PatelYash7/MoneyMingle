'use client'

import { Dashboard } from "@/components/component/Dashboard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router =useRouter()
  const token =localStorage.getItem('token')
  return (
   <>
    {token? <Dashboard/> : router.push("/signin")}
   </>
  );
}
