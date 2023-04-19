import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { publicRoutes, privateRoutes } from './utils/routes'

export default function middleware(req:any) {
  let verify = req.cookies.get("token");
  const { origin, pathname } = req.nextUrl

  console.log('-->',verify)

  if (!verify && privateRoutes.includes(pathname)) {
    return NextResponse.redirect(origin);
  }

  if (verify && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(`${origin}/home`);
  }


}