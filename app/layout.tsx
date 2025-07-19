import type { Metadata } from 'next'
import './globals.css'
import MuiThemeProvider from '@/theme/Provider'
import Script from 'next/script'
import DefaultLayout from '@/components/layouts/DefaultLayout'

export const metadata: Metadata = {
  title: 'oneinfo.ai',
  description: 'An AI agent built to be the strategist, editor, and growth manager every creator needs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <Script src="https://unpkg.com/@googlemaps/js-api-loader@1.x/dist/index.min.js" />
      <body
        suppressContentEditableWarning
        suppressHydrationWarning
      >
        <MuiThemeProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
