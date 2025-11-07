"use server"
import axios, { AxiosError, CreateAxiosDefaults } from 'axios'

export async function login(prevState: any, formData: FormData) {
	// export async function login(loginData: { login: string | undefined, password: string | undefined }) {

	interface ILoginDto {
		login: string | undefined,
		password: string | undefined
	}
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

		return res

	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			handleAxiosError(error)
		} else {
			console.error('Неожиданная ошибка:', error)
		}
	}
}

function handleAxiosError(error: AxiosError) {
	if (error.response) {
		// Сервер вернул ответ с ошибкой (статус 4xx, 5xx)
		const responseMessage = error.response.data as { message: string }

		console.error(
			`Ошибка сервера: ${error.response.status} ${error.response.statusText}`,
			responseMessage.message
		)
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
	}
	else {
		// Ошибка при настройке запроса (например, неверный URL)
		console.error('Ошибка запроса:', error.message)
		// Примеры действий:
		// - проверить конфигурацию API
		// - уведомить разработчика
	}

	// Дополнительно можно проверить код ошибки
	if (error.code === 'ERR_NETWORK') {
		console.error('Сетевая ошибка')
	}
	if (error.code === 'ECONNABORTED') {
		console.error('Запрос прерван (timeout)')
	}
}
