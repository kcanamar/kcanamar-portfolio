import Head from 'next/head'
import Layout from '@/components/Layout'
import Landing from '@/components/Landing'


export default function Home({dev}) {

  return (
    <>
      <Head>
        <title>Kcanamar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <Layout home dev={dev}>
          <Landing dev={dev}/>
        </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://portfolio-api-dr2t.onrender.com/api/about/`)
  const data = await res.json()

  return {
      props: { dev: data[0] }
  }
}
