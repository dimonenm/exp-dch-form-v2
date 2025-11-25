interface IObjectSeizedDuringInspectionOfSceneItem {
	handprints: string
	shoeMarks: string
	signsOfForcedEntry: string
	tracesOfFabric: string
	tireTracks: string
	tracesOfBiologicalOrigin: string
	otherTraces: string
}

interface IInspectionIncidentSceneIncludedOrNotIncludedInSummary {
	incidentReportNumber: number
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


export function getInspectionIncidentSceneWithAndWithoutSpecialists() {

}