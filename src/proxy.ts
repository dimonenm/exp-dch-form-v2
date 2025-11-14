import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { URL } from 'node:url'

const protectedRoutes = ['/', '/list']
const publicRoutes = ['/auth']

export default async function proxy(req: NextRequest) {
	const path = req.nextUrl.pathname

	const isProtectedRoute = protectedRoutes.includes(path)
	const isPublicRoute = publicRoutes.includes(path)

	const cookiesLocal = await cookies()

	const session = cookiesLocal.get('session')?.value
	
	console.log('session: ', session);

	if (session === undefined){
		console.log('if: ');
		return NextResponse.redirect('http://localhost:3000/auth')
	}
	return NextResponse.redirect('http://localhost:3000/')
}