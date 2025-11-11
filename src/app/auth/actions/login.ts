"use server"
import axios, { AxiosError, CreateAxiosDefaults } from 'axios'

interface ILoginDto {
	login: string | undefined,
	password: string | undefined
}
interface IResponseDto {
	type: string | undefined,
	message: string | undefined
}

export async function login(prevState: any, formData: FormData) {

	try {

		if (!formData.get('login')) {
			return 'login not found'
		}
		if (!formData.get('password')) {
			return 'password not found'
		}

		const payload: ILoginDto = { login: formData.get('login')?.toString(), password: formData.get('password')?.toString() }

		const res = await axios.post('http://localhost:3001/auth/login', payload, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(response => response.data)

		const responseDto: IResponseDto = { type: "success ", message: res }

		return responseDto

	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			return handleAxiosError(error)
		} else {
			console.error('Неожиданная ошибка:', error)
		}
	}
}

function handleAxiosError(error: AxiosError) {

	// Дополнительно можно проверить код ошибки
	if (error.code === 'ERR_NETWORK') {
		console.error('Сетевая ошибка')
	}
	if (error.code === 'ECONNABORTED') {
		console.error('Запрос прерван (timeout)')
	}

	if (error.response) {
		// Сервер вернул ответ с ошибкой (статус 4xx, 5xx)
		const responseMessage = error.response.data as { message: string }

		console.error(
			`Ошибка сервера: ${error.response.status} ${error.response.statusText}`,
			responseMessage.message
		)

		const responseDto: IResponseDto = { type: "success ", message: `${error.response.status} ${error.response.statusText} ${responseMessage.message}` }

		return responseDto

		// Примеры действий:
		// - показать пользователю сообщение о проблеме на сервере
		// - логировать детали ошибки
	}
	else if (error.request) {
		// Запрос отправлен, но ответ не получен (проблемы сети, CORS и т. п.)
		console.error('Нет ответа от сервера:', error.request)
		// Примеры действий:
		// - предложить проверить интернет‑соединение
		// - повторить запрос через некоторое время

		const responseDto: IResponseDto = { type: "success ", message: error.request }

		return responseDto
	}
	else {
		// Ошибка при настройке запроса (например, неверный URL)
		console.error('Ошибка запроса:', error.message)
		// Примеры действий:
		// - проверить конфигурацию API
		// - уведомить разработчика

		const responseDto: IResponseDto = { type: "success ", message: error.request }

		return responseDto
	}
}
