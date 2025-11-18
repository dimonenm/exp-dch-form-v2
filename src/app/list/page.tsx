import { Metadata } from 'next'
import { logout } from '../auth/actions/logout'

export const metadata: Metadata = {
	title: 'List',
	description: 'list page',
}

export default function ListPage() {
	return (
		<>
		<div>List</div>
		<div onClick={logout}>Logout</div>
		</>
	)
}