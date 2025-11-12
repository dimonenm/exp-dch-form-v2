"use server"

import { cookies } from 'next/headers';

export async function createSession(jwt: string) {
	const expiresAt = new Date(Date.now() + 1000 * 60 * 2)
	const cookieStore = await cookies()

	cookieStore.set('session', jwt, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
	})
}