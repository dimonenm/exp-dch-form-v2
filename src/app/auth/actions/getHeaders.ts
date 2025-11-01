"use server"
import { cookies, draftMode, headers } from 'next/headers'

export default async function GetHeaders(): Promise<boolean> {
	// console.log('headers: ', headers())
	// console.log('draftMode: ', draftMode())
	// console.log('cookies: ', await cookies())
	const c = await cookies()
	console.log('c: ', c);
	return true
}