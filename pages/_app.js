import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'
import DevProvider from '@/utils/devContext'
import { Hind_Siliguri } from '@next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
        </main>
      </DevProvider>
    )
  }

  return devContent ? loaded() : loading()
}
