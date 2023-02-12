import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'
import DevProvider from '@/utils/devContext'
import { Hind_Siliguri } from '@next/font/google'
import { Analytics } from "@vercel/analytics/react"

const hind = Hind_Siliguri({
  subsets:['latin-ext'],
  weight: ['400']
})

export default function App({ Component, pageProps }) {
  // destructure dev data from pageProps to set initialstate
  const { dev } = pageProps
  // Store dev as state for the DevProvider
  const [devContent] = useState(dev)

  const loading = () => <h1>Loading....</h1>

  const loaded = () => {
    return (
      <DevProvider value={{devContent}}>
        <main className={hind.className}>
          <Nav/>
          <Component {...pageProps} />
          <Footer/>
          <Analytics />
        </main>
      </DevProvider>
    )
  }

  return devContent ? loaded() : loading()
}
