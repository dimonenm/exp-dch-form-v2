"use client"

import { Card, CardBody, CardHeader } from "@heroui/react"
import { getInspectionIncidentSceneIncludedOrNotIncludedInSummary } from '../auth/db/getData'

export function InspectionIncidentSceneList() {
	const items = getInspectionIncidentSceneIncludedOrNotIncludedInSummary()

	if (!items.length) {
		return <div className="text-center text-sm text-gray-500">Данных по осмотрам мест происшествий нет</div>
	}

	const formatSeizedObjects = (seized: typeof items[0]['objectsSeizedDuringInspectionOfScene']) => {
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

		return seizedSummary.length ? seizedSummary.join('; ') : 'не изымалось'
	}

	return (
		<div className="flex flex-col gap-3">
			{items.map((item) => (
				<Card
					key={item.incidentReportNumber ?? `${item.CUSP}-${item.address}`}
					className="border-1 border-solid border-[#EDEDED] shadow-sm"
					radius="none"
				>
					<CardHeader className="bg-gray-50 border-b border-[#EDEDED] px-4 py-3">
						<div className="flex justify-between items-center w-full">
							<span className="text-sm font-semibold text-gray-900">
								№ КУСП: <span className="font-normal">{item.CUSP}</span>
							</span>
							{item.incidentReportNumber && (
								<span className="text-sm font-semibold text-gray-900">
									№ сообщения: <span className="font-normal">{item.incidentReportNumber}</span>
								</span>
							)}
						</div>
					</CardHeader>
					<CardBody className="p-0">
						<div className="overflow-x-auto">
							<table className="w-full text-sm">
								<tbody>
									<tr className="border-b border-[#EDEDED]">
										<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50 w-1/4">ОВД</td>
										<td className="px-4 py-2.5 text-gray-900">{item.departmentOfInternalAffairs}</td>
									</tr>
									<tr className="border-b border-[#EDEDED]">
										<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50">Специалист</td>
										<td className="px-4 py-2.5 text-gray-900">{item.specialist}</td>
									</tr>
									<tr className="border-b border-[#EDEDED]">
										<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50">Время осмотра</td>
										<td className="px-4 py-2.5 text-gray-900">{item.timeOfInspection}</td>
									</tr>
									<tr className="border-b border-[#EDEDED]">
										<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50">Вид преступления</td>
										<td className="px-4 py-2.5 text-gray-900">{item.typeOfCrime}</td>
									</tr>
									<tr className="border-b border-[#EDEDED]">
										<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50">Адрес</td>
										<td className="px-4 py-2.5 text-gray-900">{item.address}</td>
									</tr>
									<tr className="border-b border-[#EDEDED]">
										<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50">Способ совершения</td>
										<td className="px-4 py-2.5 text-gray-900">{item.methodOfExecution}</td>
									</tr>
									{item.fullNameOfVictim && (
										<tr className="border-b border-[#EDEDED]">
											<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50">ФИО потерпевшего</td>
											<td className="px-4 py-2.5 text-gray-900">{item.fullNameOfVictim}</td>
										</tr>
									)}
									{item.amountOfDamage && (
										<tr className="border-b border-[#EDEDED]">
											<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50">Размер ущерба</td>
											<td className="px-4 py-2.5 text-gray-900">{item.amountOfDamage}</td>
										</tr>
									)}
									<tr className="border-b border-[#EDEDED]">
										<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50">Изъятые объекты</td>
										<td className="px-4 py-2.5 text-gray-900">{formatSeizedObjects(item.objectsSeizedDuringInspectionOfScene)}</td>
									</tr>
									{(item.informationAboutSuspect || item.informationAboutVerificationResults) && (
										<tr>
											<td className="px-4 py-2.5 font-semibold text-gray-700 bg-gray-50 align-top">Сведения о подозреваемом / результат</td>
											<td className="px-4 py-2.5 text-gray-900">{item.informationAboutSuspect || item.informationAboutVerificationResults}</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</CardBody>
				</Card>
			))}
		</div>
	)
}



