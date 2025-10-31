"use server"
import { cookies, draftMode, headers } from 'next/headers'

export default async function GetHeaders() {
	console.log('headers: ', headers)
	console.log('draftMode: ', draftMode)
	console.log('cookies: ', cookies)
}