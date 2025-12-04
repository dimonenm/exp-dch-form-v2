import { getInspectionIncidentSceneIncludedOrNotIncludedInSummary } from '../auth/db/getData'

export function InspectionIncidentSceneList() {
	const items = getInspectionIncidentSceneIncludedOrNotIncludedInSummary()

	if (!items.length) {
		return <div className="text-center text-sm text-gray-500">Данных по осмотрам мест происшествий нет</div>
	}

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full border border-gray-200 text-sm">
				<thead className="bg-gray-50">
					<tr>
						<th className="border-b border-gray-200 px-3 py-2 text-left">№ КУСП</th>
						<th className="border-b border-gray-200 px-3 py-2 text-left">№ сообщения</th>
						<th className="border-b border-gray-200 px-3 py-2 text-left">ОВД</th>
						<th className="border-b border-gray-200 px-3 py-2 text-left">Специалист</th>
						<th className="border-b border-gray-200 px-3 py-2 text-left">Время осмотра</th>
						<th className="border-b border-gray-200 px-3 py-2 text-left">Вид преступления</th>
						<th className="border-b border-gray-200 px-3 py-2 text-left">Адрес</th>
						<th className="border-b border-gray-200 px-3 py-2 text-left">Изъятые объекты</th>
						<th className="border-b border-gray-200 px-3 py-2 text-left">Сведения о подозреваемом / результат</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => {
						const seized = item.objectsSeizedDuringInspectionOfScene

						const seizedSummary: string[] = []

						if (seized.handprints) {
							seizedSummary.push(
								`следы рук: ${seized.handprints.count}` +
									(seized.handprints.examinationNumber ? ` (эксп. № ${seized.handprints.examinationNumber})` : ''),
							)
						}

						if (seized.shoeMarks) {
							seizedSummary.push(
								`обувные следы: ${seized.shoeMarks.count}` +
									(seized.shoeMarks.examinationNumber ? ` (эксп. № ${seized.shoeMarks.examinationNumber})` : ''),
							)
						}

						if (seized.signsOfForcedEntry) {
							seizedSummary.push(
								`следы взлома: ${seized.signsOfForcedEntry.count}` +
									(seized.signsOfForcedEntry.examinationNumber
										? ` (эксп. № ${seized.signsOfForcedEntry.examinationNumber})`
										: ''),
							)
						}

						if (seized.tracesOfFabric) {
							seizedSummary.push(
								`тканевые следы: ${seized.tracesOfFabric.count}` +
									(seized.tracesOfFabric.examinationNumber
										? ` (эксп. № ${seized.tracesOfFabric.examinationNumber})`
										: ''),
							)
						}

						if (seized.tireTracks) {
							seizedSummary.push(
								`следы шин: ${seized.tireTracks.count}` +
									(seized.tireTracks.examinationNumber ? ` (эксп. № ${seized.tireTracks.examinationNumber})` : ''),
							)
						}

						if (seized.tracesOfBiologicalOrigin) {
							seizedSummary.push(
								`биологические следы: ${seized.tracesOfBiologicalOrigin.count}` +
									(seized.tracesOfBiologicalOrigin.examinationNumber
										? ` (эксп. № ${seized.tracesOfBiologicalOrigin.examinationNumber})`
										: ''),
							)
						}

						if (seized.otherTraces) {
							seizedSummary.push(
								`иные следы: ${seized.otherTraces.count}` +
									(seized.otherTraces.examinationNumber ? ` (эксп. № ${seized.otherTraces.examinationNumber})` : ''),
							)
						}

						return (
							<tr key={item.incidentReportNumber ?? `${item.CUSP}-${item.address}`}>
								<td className="border-b border-gray-200 px-3 py-2 align-top">{item.CUSP}</td>
								<td className="border-b border-gray-200 px-3 py-2 align-top">
									{item.incidentReportNumber ?? '—'}
								</td>
								<td className="border-b border-gray-200 px-3 py-2 align-top">{item.departmentOfInternalAffairs}</td>
								<td className="border-b border-gray-200 px-3 py-2 align-top">{item.specialist}</td>
								<td className="border-b border-gray-200 px-3 py-2 align-top">{item.timeOfInspection}</td>
								<td className="border-b border-gray-200 px-3 py-2 align-top">{item.typeOfCrime}</td>
								<td className="border-b border-gray-200 px-3 py-2 align-top">{item.address}</td>
								<td className="border-b border-gray-200 px-3 py-2 align-top">
									{seizedSummary.length ? seizedSummary.join('; ') : 'не изымалось'}
								</td>
								<td className="border-b border-gray-200 px-3 py-2 align-top">
									{item.informationAboutSuspect || item.informationAboutVerificationResults || '—'}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}


