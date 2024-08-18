'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router =useRouter()
  const token =localStorage.getItem('token')
  return (
   <>
    {token? <div>Hello</div> : router.push("/signup")}
   </>
  );
}
