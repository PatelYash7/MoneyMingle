import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { authOptions } from "./lib/authoptions/auth";

const protectedRoute = ["/dashboard", "/p2p", "/transactions", "/transfer"];

export default async function middleware(req: NextRequest, res: NextResponse) {
  // const session = await getServerSession(authOptions);
  // if(!session && protectedRoute.includes(req.nextUrl.pathname)){
  //     const absoluteURL = new URL("/",req.nextUrl.origin)
  //     return NextResponse.redirect(absoluteURL.toString())
  // }
}
