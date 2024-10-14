import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import '@/app/globals.css'

export const metadata: Metadata = {
	title: 'Ernesto Arellano, Software Engineer',
	description:
		'Ernesto Arellano is a Senior Software Engineer with 12+ years of experience specializing in scalable web solutions using React, Next.js, TypeScript, and more. Delivering high-quality code and tools that drive business growth.',
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
