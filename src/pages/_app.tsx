import { useEffect } from 'react'

import { axeAccessibilityReporter } from '@/utils/axeAccessibilityReporter'

import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])
  
  return <Component {...pageProps} />
}
