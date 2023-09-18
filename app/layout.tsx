import { Inter } from 'next/font/google'
import '@/assets/styles/globals.scss'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Тестовое задание',
	description: 'Тестовое для Стрим-Телеком'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
