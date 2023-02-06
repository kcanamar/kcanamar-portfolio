import '@/styles/globals.css'
import { useState } from 'react'
import DevProvider from '@/utils/devContext'
import { Hind_Siliguri } from '@next/font/google'

const hind = Hind_Siliguri({
  subsets:['latin-ext'],
  weight: ['400']
})

export default function App({ Component, pageProps }) {
  // destructure dev data from pageProps to set initialstate
  const { dev } = pageProps
  // Store dev as state for the DevProvider
  const [devContent] = useState(dev)

  return (
      <DevProvider value={{devContent}}>
        <main className={hind.className}>
          <Component {...pageProps} />
        </main>
      </DevProvider>
    )
}
