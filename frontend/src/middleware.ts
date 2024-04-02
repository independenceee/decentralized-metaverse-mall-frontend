import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { store } from "./redux/store";
import routes from "@/configs/routes";
import { values } from "lodash";

type PathNameType = (typeof routes.private)[keyof typeof routes.private];

export function middleware(request: NextRequest) {
    const isAuthenticated = Boolean(store.getState().auth.user);

    const privateRoutes = values(routes.private);
    console.log(privateRoutes);
    const { pathname } = request.nextUrl;
    console.log(!isAuthenticated, privateRoutes.includes(pathname as PathNameType));
    if (!isAuthenticated && privateRoutes.includes(pathname as PathNameType)) {
        return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
    }

    return NextResponse.next();
}
