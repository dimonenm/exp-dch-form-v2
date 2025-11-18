import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { URL } from 'node:url'

const protectedRoutes = ['/', '/list']
const publicRoutes = ['/auth']

export default async function proxy(req: NextRequest) {
	const path: string = req.nextUrl.pathname

	const isProtectedRoute: boolean = protectedRoutes.includes(path)
	const isPublicRoute: boolean = publicRoutes.includes(path)

	const cookiesLocal = await cookies()

	const session: string | undefined = cookiesLocal.get('session')?.value

	if (isProtectedRoute) {
		if (session === undefined) {
			return NextResponse.redirect(new URL('http://localhost:3000/auth'))
		}
	}

	return NextResponse.next()
}