"use server"
import axios, { AxiosError } from 'axios'
import { deleteSession } from './session'
import { redirect } from 'next/navigation'

export async function logout() {
	await deleteSession()
	redirect("/auth")
}