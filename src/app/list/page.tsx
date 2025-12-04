import { Metadata } from 'next'
import { logout } from '../auth/actions/logout'
import { InspectionIncidentSceneList } from './InspectionIncidentSceneList'

export const metadata: Metadata = {
	title: 'List',
	description: 'list page',
}

export default function ListPage() {
	return (
		<div className="p-6 flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-semibold">Осмотры мест происшествий</h1>
				<button
					type="button"
					onClick={logout}
					className="text-sm text-red-600 hover:text-red-700 underline-offset-2 hover:underline"
				>
					Выйти
				</button>
			</div>

			<InspectionIncidentSceneList />
		</div>
	)
}