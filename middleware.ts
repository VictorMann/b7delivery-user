import { NextRequest, NextResponse } from "next/server";
import { useApi } from "./app/libs/useApi";

export async function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;
  let tenant = pathname.split('/')[1].split('?')[0];
  const api = useApi();
  const dataTenant = await api.getTenant(tenant as string);
  if (!dataTenant) {
    return NextResponse.redirect(
      new URL('/', request.url)
    );
  }
}

export const config = {
  matcher: [
    '/:path'
  ]
}