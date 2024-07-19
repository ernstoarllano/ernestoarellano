import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import '@/app/globals.css'

export const metadata: Metadata = {
	title: 'Ernesto Arellano, Software Engineer',
	description:
		'Ernesto Arellano is a Software Engineer delivering high quality code tools that scale.',
}

type RootLayoutProps = Readonly<{
	children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={GeistSans.className}>{children}</body>
		</html>
	)
}
