import type { Metadata } from 'next'
// import Header from '../components/Header'

export const metadata: Metadata = {
    title: 'Auth',
    description: 'login',
}

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            {/* <Header/> */}
            {children}
        </>

    )
}
