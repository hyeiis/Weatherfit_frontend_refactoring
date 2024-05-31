import type { Metadata } from 'next'
import ReactQueryProvider from '../utils/provider/ReactQueryProvider'
import RegisterServiceWorker from '@/utils/client/RegisterSeviceWorker'
import WebView from '@/Components/WebView/WebView'
import { WeatherProviderByContext } from '../../contexts/WeatherContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <title>옷늘날씨</title>
      <body>
        <ReactQueryProvider>
          <RegisterServiceWorker />
          <WebView>
            <WeatherProviderByContext>{children}</WeatherProviderByContext>
          </WebView>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
