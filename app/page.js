// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Checkbox } from "@/components/checkbox";

export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-black/70 w-[500px] px-16 py-12 rounded-lg">
      <h1 className="font-bold text-3xl mb-8"> Sign In </h1>
      <Input placeholder="Email or mobile number" className="mb-5 bg-black/70 h-16" type="text" />
      <Input placeholder="Password" className="mb-5 bg-black/70 h-16" type="password" />
      <Button onClick={() => router.push("/browse")}
        className="w-full h-12 bg-[#E50914] text-white font-bold hover:bg-[#E50914]/90">Sign In</Button>
      <p className="text-gray-400 text-center py-6"> OR </p>
      <Button className="w-full h-12 mb-2 bg-white/20 hover:bg-white/10 text-white font-bold text-base"> Use a Sign-In Code
      </Button>
      <div className="flex justify-between text-sm">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember Me
          </label>
        </div>
        <Link href="#" className=""> Forgot password?</Link>
      </div>
    </div >
  );
}

