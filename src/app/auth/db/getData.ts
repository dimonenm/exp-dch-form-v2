interface IItemOfObjectSeizedDuringInspectionOfScene {
	count: string
	examinationNumber: string | null
}

interface IObjectSeizedDuringInspectionOfSceneItem {
	handprints: IItemOfObjectSeizedDuringInspectionOfScene | null
	shoeMarks: IItemOfObjectSeizedDuringInspectionOfScene | null
	signsOfForcedEntry: IItemOfObjectSeizedDuringInspectionOfScene | null
	tracesOfFabric: IItemOfObjectSeizedDuringInspectionOfScene | null
	tireTracks: IItemOfObjectSeizedDuringInspectionOfScene | null
	tracesOfBiologicalOrigin: IItemOfObjectSeizedDuringInspectionOfScene | null
	otherTraces: IItemOfObjectSeizedDuringInspectionOfScene | null
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
	informationAboutVerificationResults: string
	informationAboutSuspect: string
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
			specialist: 'А-в',
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
				tracesOfFabric: { count: '1 ЛТ', examinationNumber: null },
				tireTracks: null,
				tracesOfBiologicalOrigin: null,
				otherTraces: null,
			},
			informationAboutSuspect: '',
			informationAboutVerificationResults: ''
		},
		{
			incidentReportNumber: 5,
			departmentOfInternalAffairs: 'Керчь',
			specialist: 'Г-в',
			timeOfInspection: '15:50-16:30',
			typeOfCrime: 'кража имущества',
			address: 'ул. П. Кор.',
			methodOfExecution: '15.11.2025г., свободный доступ',
			fullNameOfVictim: 'К Л.Б.',
			amountOfDamage: '',
			CUSP: '17974 от 18.11.2025',
			numberCriminalCase: '',
			articleOfCriminalCode: '',
			objectsSeizedDuringInspectionOfScene: {
				handprints: null,
				shoeMarks: { count: '1 т/дп', examinationNumber: null },
				signsOfForcedEntry: null,
				tracesOfFabric: null,
				tireTracks: null,
				tracesOfBiologicalOrigin: null,
				otherTraces: null,
			},
			informationAboutSuspect: '',
			informationAboutVerificationResults: 'Установлен: Н И.В. 29.05.1978 г.р. д/к есть в ЦИАДИС'
		},
		{
			incidentReportNumber: 6,
			departmentOfInternalAffairs: 'Керчь',
			specialist: 'Г-в',
			timeOfInspection: '16:20-17:20',
			typeOfCrime: 'кража имущества',
			address: 'ул. Коз.',
			methodOfExecution: '15.11.2025г., свободный доступ',
			fullNameOfVictim: 'Б Е.Ю.',
			amountOfDamage: '',
			CUSP: '17975 от 18.11.2025',
			numberCriminalCase: '',
			articleOfCriminalCode: '',
			objectsSeizedDuringInspectionOfScene: {
				handprints: null,
				shoeMarks: { count: '1 фото', examinationNumber: null },
				signsOfForcedEntry: null,
				tracesOfFabric: null,
				tireTracks: null,
				tracesOfBiologicalOrigin: null,
				otherTraces: null,
			},
			informationAboutSuspect: '',
			informationAboutVerificationResults: 'Установлен: Н И.В. 29.05.1978 г.р. д/к есть в ЦИАДИС'
		},
		{
			incidentReportNumber: 7,
			departmentOfInternalAffairs: 'Керчь',
			specialist: 'Г-в',
			timeOfInspection: '17:30-18:20',
			typeOfCrime: 'кража имущества',
			address: 'ул. Коз.',
			methodOfExecution: '15.11.2025г., свободный доступ',
			fullNameOfVictim: 'Ш И.А.',
			amountOfDamage: '',
			CUSP: '17977 от 18.11.2025',
			numberCriminalCase: '',
			articleOfCriminalCode: '',
			objectsSeizedDuringInspectionOfScene: {
				handprints: null,
				shoeMarks: { count: '1 т/дп', examinationNumber: null },
				signsOfForcedEntry: null,
				tracesOfFabric: null,
				tireTracks: null,
				tracesOfBiologicalOrigin: null,
				otherTraces: null,
			},
			informationAboutSuspect: '',
			informationAboutVerificationResults: 'Установлен: Н И.В. 29.05.1978 г.р. д/к есть в ЦИАДИС'
		},
		{
			incidentReportNumber: 8,
			departmentOfInternalAffairs: 'Бахчисарай',
			specialist: 'С-к',
			timeOfInspection: '20:00-22:40',
			typeOfCrime: 'кража металлолома',
			address: 'с. Скал.',
			methodOfExecution: 'в период с 2023г. свободный доступ (заброшенное здание)',
			fullNameOfVictim: 'Г О.В.',
			amountOfDamage: '25 000р.',
			CUSP: '10129 от 18.11.2025',
			numberCriminalCase: '',
			articleOfCriminalCode: '',
			objectsSeizedDuringInspectionOfScene: {
				handprints: { count: '1 ЛТ', examinationNumber: '259' },
				shoeMarks: { count: '1 т/дп', examinationNumber: '260' },
				signsOfForcedEntry: null,
				tracesOfFabric: null,
				tireTracks: null,
				tracesOfBiologicalOrigin: null,
				otherTraces: null,
			},
			informationAboutSuspect: '1 СПР пригоден, по ЦИАДИС: Х В.А. 08.05.1995 г.р. (обязательная кадровая, служба в МВД РФ) (Т/С предоставлена в 22:56)',
			informationAboutVerificationResults: 'Установлен: Н И.В. 29.05.1978 г.р. д/к есть в ЦИАДИС'
		},
		{
			incidentReportNumber: 25,
			departmentOfInternalAffairs: 'Белогорск',
			specialist: 'Х-о',
			timeOfInspection: '12:30-19:00',
			typeOfCrime: 'Угон а/м',
			address: 'п. Зуя, ул. Ш-я, д. 00',
			methodOfExecution: 'свободный доступ (а/м не закрыт, ключи находились в нем)',
			fullNameOfVictim: 'Г А.З.',
			amountOfDamage: '',
			CUSP: '6074 от 18.11.2025',
			numberCriminalCase: '',
			articleOfCriminalCode: '',
			objectsSeizedDuringInspectionOfScene: {
				handprints: { count: '5 ЛТ', examinationNumber: '244' },
				shoeMarks: null,
				signsOfForcedEntry: null,
				tracesOfFabric: null,
				tireTracks: null,
				tracesOfBiologicalOrigin: null,
				otherTraces: null,
			},
			informationAboutSuspect: '1 СПР пригоден, по ЦИАДИС: Х В.А. 08.05.1995 г.р. (обязательная кадровая, служба в МВД РФ) (Т/С предоставлена в 22:56)',
			informationAboutVerificationResults: 'Установлен: Н И.В. 29.05.1978 г.р. д/к есть в ЦИАДИС'
		},
	]
}