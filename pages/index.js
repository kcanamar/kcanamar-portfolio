import Head from 'next/head'
import Layout from '@/components/Layout'
import Landing from '@/components/Landing'
// import dbConnect from '@/utils/dbConnect'
// import About from '@/models/about'
// import Project from '@/models/project'


export default function Home() {

  return (
    <>
      <Head>
        <title>Kcanamar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <Layout home >
          <Landing />
        </Layout>
    </>
  )
}

// * Fetching from an external api
// export async function getStaticProps() {
//   const data = await devLoader()

//   return {
//       props: { dev: data }
//   }
// }

// * Fetching directly from the database
/* Retrieves dev(s) data from mongodb database */
// export async function getServerSideProps() {
//   await dbConnect()

//   /* find all the data in our database */
//   const result = await About.find({}).populate("projects")
//   const dev = JSON.parse(JSON.stringify(result[0]))

//   const result2 = await Project.find({}).populate("stack")

//   return { props: { dev } }
// }