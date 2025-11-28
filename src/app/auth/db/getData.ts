interface IObjectSeizedDuringInspectionOfSceneItem {
	handprints: string | null
	shoeMarks: string | null
	signsOfForcedEntry: string | null
	tracesOfFabric: string | null
	tireTracks: string | null
	tracesOfBiologicalOrigin: string | null
	otherTraces: string | null
}

interface IInspectionIncidentSceneIncludedOrNotIncludedInSummary {
	incidentReportNumber: number | null
	departmentOfInternalAffairs: string
	specialist: string
	timeOfInspection: string
	typeOfCrime: string
	address: string
	methodOfExecution: string
	fullNameOfVictim: string
	amountOfDamage: string
	CUSP: string
	numberCriminalCase: string
	articleOfCriminalCode: string
	objectsSeizedDuringInspectionOfScene: IObjectSeizedDuringInspectionOfSceneItem
}

interface IFactsOfNotInvolvingSpecialists {
	incidentReportNumber: number
	departmentOfInternalAffairs: string
	typeOfCrime: string
	address: string
	CUSP: string
	specialist: string
	reasonNotInvolvingSpecialists: string
	specialistIndicationInSummary: string
	fullNameOfPersonCommittedCrime: string
}

interface INotProvidedFingerprintAndButocard {
	incidentReportNumber: number
	fullName: string
	reasonForVerification: string
	fingerprint: string
	butocard: string
}

interface INotProvidedMaterials {
	incidentReportNumber: number
	fullName: string
	reasonForVerification: string
	fingerprint: string
	butocard: string
}


export function getInspectionIncidentSceneIncludedOrNotIncludedInSummary(): IInspectionIncidentSceneIncludedOrNotIncludedInSummary[] {
	return [
		{
			incidentReportNumber: 2,
			departmentOfInternalAffairs: 'Феодосия',
			specialist: 'Алпатов',
			timeOfInspection: '14:00-15:30',
			typeOfCrime: 'кража велосипеда',
			address: 'пгт. Коктебель',
			methodOfExecution: 'свободный доступ',
			fullNameOfVictim: 'С .А.П.',
			amountOfDamage: '11 300 р.',
			CUSP: '18549 от 18.11.2025',
			numberCriminalCase: '',
			articleOfCriminalCode: '',
			objectsSeizedDuringInspectionOfScene: {
				handprints: null,
				shoeMarks: null,
				signsOfForcedEntry: null,
				tracesOfFabric: '1 ЛТ',
				tireTracks: null,
				tracesOfBiologicalOrigin: null,
				otherTraces: null,
			}
		}
	]
}