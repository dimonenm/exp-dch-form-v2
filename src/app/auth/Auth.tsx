"use client";

import { Button, Form, Input } from "@heroui/react";
import GetHeaders from './actions/getHeaders'


export function Auth() {
    const submit = ()=>{

        console.log('submit');
    }
    console.log(GetHeaders());

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
                        errorMessage="Please enter a valid username"
                        // label="Username"
                        labelPlacement="outside"
                        name="username"
                        placeholder="Username"
                        type="text"
                    />

                    <Input
                        isRequired
                        errorMessage="Please enter a valid password"
                        // label="Email"
                        labelPlacement="outside"
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
    );
}
