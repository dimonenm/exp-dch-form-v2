"use client"

import { Card, CardBody, CardHeader } from "@heroui/react"
import { getInspectionIncidentSceneIncludedOrNotIncludedInSummary } from '../auth/db/getData'

interface SeizedItem {
	label: string
	value: string
}

export function InspectionIncidentSceneList() {
	const items = getInspectionIncidentSceneIncludedOrNotIncludedInSummary()

	if (!items.length) {
		return <div className="text-center text-sm text-gray-500">Данных по осмотрам мест происшествий нет</div>
	}

	const getSeizedObjects = (seized: typeof items[0]['objectsSeizedDuringInspectionOfScene']): SeizedItem[] => {
		const seizedItems: SeizedItem[] = []

		if (seized.handprints) {
			seizedItems.push({
				label: 'Следы рук',
				value: seized.handprints.count + (seized.handprints.examinationNumber ? ` (эксп. № ${seized.handprints.examinationNumber})` : ''),
			})
		}

		if (seized.shoeMarks) {
			seizedItems.push({
				label: 'Обувные следы',
				value: seized.shoeMarks.count + (seized.shoeMarks.examinationNumber ? ` (эксп. № ${seized.shoeMarks.examinationNumber})` : ''),
			})
		}

		if (seized.signsOfForcedEntry) {
			seizedItems.push({
				label: 'Следы взлома',
				value: seized.signsOfForcedEntry.count + (seized.signsOfForcedEntry.examinationNumber
					? ` (эксп. № ${seized.signsOfForcedEntry.examinationNumber})`
					: ''),
			})
		}

		if (seized.tracesOfFabric) {
			seizedItems.push({
				label: 'Тканевые следы',
				value: seized.tracesOfFabric.count + (seized.tracesOfFabric.examinationNumber
					? ` (эксп. № ${seized.tracesOfFabric.examinationNumber})`
					: ''),
			})
		}

		if (seized.tireTracks) {
			seizedItems.push({
				label: 'Следы шин',
				value: seized.tireTracks.count + (seized.tireTracks.examinationNumber ? ` (эксп. № ${seized.tireTracks.examinationNumber})` : ''),
			})
		}

		if (seized.tracesOfBiologicalOrigin) {
			seizedItems.push({
				label: 'Биология',
				value: seized.tracesOfBiologicalOrigin.count + (seized.tracesOfBiologicalOrigin.examinationNumber
					? ` (эксп. № ${seized.tracesOfBiologicalOrigin.examinationNumber})`
					: ''),
			})
		}

		if (seized.otherTraces) {
			seizedItems.push({
				label: 'Иное',
				value: seized.otherTraces.count + (seized.otherTraces.examinationNumber ? ` (эксп. № ${seized.otherTraces.examinationNumber})` : ''),
			})
		}

		return seizedItems
	}

	const FieldLabel = ({ children }: { children: React.ReactNode }) => (
		<span className="bg-gray-50 rounded-md px-2 py-1 text-xs text-gray-900">{children}</span>
	)

	const FieldValue = ({ children }: { children: React.ReactNode }) => (
		<span className="bg-white rounded-md px-2 py-1 text-xs text-gray-900 border border-gray-200">{children}</span>
	)

	return (
		<div className="flex flex-col gap-4">
			{items.map((item) => {
				const seizedObjects = getSeizedObjects(item.objectsSeizedDuringInspectionOfScene)

				return (
					<Card
						key={item.incidentReportNumber ?? `${item.CUSP}-${item.address}`}
						className="border border-gray-200 rounded-lg shadow-sm"
					>
						{/* Верхняя серая полоса с текстом справа */}
						<div className="bg-gray-100 px-4 py-2 rounded-t-lg">
							<div className="flex justify-end">
								<span className="text-xs text-gray-900">Предпологаемый вывод, Результаты проверки</span>
							</div>
						</div>

						<CardBody className="p-4">
							{/* Сетка с полями данных */}
							<div className="grid grid-cols-3 gap-2 mb-3">
								{/* Первая строка */}
								<div className="flex items-center gap-2">
									<FieldLabel>№ по сводке</FieldLabel>
									<FieldValue>{item.incidentReportNumber ?? '—'}</FieldValue>
								</div>
								<div className="flex items-center gap-2">
									<FieldLabel>Вид преступления</FieldLabel>
									<FieldValue>{item.typeOfCrime}</FieldValue>
								</div>
								<div className="flex items-center gap-2">
									<FieldLabel>КУСП</FieldLabel>
									<FieldValue>{item.CUSP}</FieldValue>
								</div>

								{/* Вторая строка */}
								<div className="flex items-center gap-2">
									<FieldLabel>Эксперт</FieldLabel>
									<FieldValue>{item.specialist}</FieldValue>
								</div>
								<div className="flex items-center gap-2">
									<FieldLabel>Способ совершения</FieldLabel>
									<FieldValue>{item.methodOfExecution}</FieldValue>
								</div>
								<div className="flex items-center gap-2">
									<FieldLabel>Статья</FieldLabel>
									<FieldValue>{item.articleOfCriminalCode || '—'}</FieldValue>
								</div>

								{/* Третья строка */}
								<div className="flex items-center gap-2">
									<FieldLabel>ОВД</FieldLabel>
									<FieldValue>{item.departmentOfInternalAffairs}</FieldValue>
								</div>
								<div className="flex items-center gap-2">
									<FieldLabel>Адрес</FieldLabel>
									<FieldValue>{item.address}</FieldValue>
								</div>
								<div className="flex items-center gap-2">
									<FieldLabel>УД</FieldLabel>
									<FieldValue>{item.numberCriminalCase || '—'}</FieldValue>
								</div>

								{/* Четвертая строка */}
								<div className="flex items-center gap-2">
									<FieldLabel>Время ОМП</FieldLabel>
									<FieldValue>{item.timeOfInspection}</FieldValue>
								</div>
								<div className="flex items-center gap-2">
									<FieldLabel>ФИО потерпевшего</FieldLabel>
									<FieldValue>{item.fullNameOfVictim || '—'}</FieldValue>
								</div>
								<div className="flex items-center gap-2">
									<FieldLabel>Сумма ущерба</FieldLabel>
									<FieldValue>{item.amountOfDamage || '—'}</FieldValue>
								</div>
							</div>

							{/* Секция "Изъятия" */}
							{seizedObjects.length > 0 && (
								<div className="mb-3">
									<div className="mb-2">
										<span className="bg-gray-50 rounded-md px-2 py-1 text-xs text-gray-900 inline-block">
											Изъятия
										</span>
									</div>
									<div className="grid grid-cols-3 gap-2">
										{seizedObjects.map((seized, index) => (
											<div key={index} className="flex items-center gap-2">
												<FieldLabel>{seized.label}</FieldLabel>
												<FieldValue>{seized.value}</FieldValue>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Длинное поле внизу */}
							{(item.informationAboutSuspect || item.informationAboutVerificationResults) && (
								<div className="flex flex-col gap-2">
									<FieldLabel>
										ФИО подозреваемого по сводке, предоставление д/к, б/к, замечания по ФТ
									</FieldLabel>
									<FieldValue>
										{item.informationAboutSuspect || item.informationAboutVerificationResults}
									</FieldValue>
								</div>
							)}
						</CardBody>
					</Card>
				)
			})}
		</div>
	)
}



