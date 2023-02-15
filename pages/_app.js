import '@/styles/globals.css'
import { Hind_Siliguri } from '@next/font/google'
import { Analytics } from "@vercel/analytics/react"

const hind = Hind_Siliguri({
  subsets:['latin-ext'],
  weight: ['400']
})

export default function App({ Component, pageProps }) {

  return (
        <main className={hind.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
    )

}
