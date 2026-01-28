import {HttpStatus} from "@antoinette-agency/sofetch";
import {NextResponse} from "next/server";

export const emptyResponse = (status: HttpStatus) => new NextResponse(null, {status})