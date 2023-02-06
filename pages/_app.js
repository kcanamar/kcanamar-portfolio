import '@/styles/globals.css'
import { useState } from 'react'
import DevProvider from '@/utils/devContext'

export default function App({ Component, pageProps }) {
  console.log(pageProps, "< these are the page props")
  const { dev } = pageProps
  // Store dev as state for the DevProvider
  const [devContent] = useState(dev)

  return (
      <DevProvider value={{devContent}}>
        {/* reassign props from page props to component props */}
        <Component {...pageProps} />
      </DevProvider>
    )
}
