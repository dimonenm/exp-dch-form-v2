"use client"

import { Button, Form, Input } from "@heroui/react"
import { FormEvent, useState } from 'react'
import { login } from './actions/login'


export function Auth() {

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = Object.fromEntries(new FormData(event.currentTarget))

        const loginData = {login: data.login as string, password: data.password as string}
        
        console.log('data: ', loginData)
    }

    return (
        <div className="flex justify-center items-center h-screen overflow-hidden">
            <div className="flex flex-col justify-center items-center min-w-96 border-1 border-solid border-[#EDEDED] rounded-lg p-10 shadow-xl">
                <div className="mt-5 text-center text-xl font-medium  text-gray-900 mb-5 justify-start">
                    Авторизация
                </div>
                <Form
                    className="w-full max-w-xs flex flex-col gap-4"
                    onSubmit={submit}
                >
                    <Input
                        isRequired
                        errorMessage="Please enter a valid login"
                        // label="login"
                        // labelPlacement="outside"
                        name="login"
                        placeholder="login"
                        type="text"
                    />

                    <Input
                        isRequired
                        errorMessage="Please enter a valid password"
                        // label="Email"
                        // labelPlacement="outside"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <div className="flex gap-2">
                        <Button color="primary" type="submit">
                            Войти
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
