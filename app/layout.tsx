import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
	title: 'Ernesto Arellano, Software Engineer',
	description:
		'Ernesto Arellano is a Software Engineer delivering high quality code tools that scale.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={GeistSans.className}>{children}</body>
		</html>
	)
}
