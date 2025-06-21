import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clustrix.tech',
  description: 'Clustrix.tech is a digital agency offering technology services including brand promotion, web development, app development, and software development.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
