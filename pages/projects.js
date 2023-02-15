import dbConnect from '@/utils/dbConnect'
import AboutInfo from '@/models/about'
import ProjectInfo from '@/models/project'
import TalentInfo from '@/models/talent'

export default function Projects() {

    return <h1>Projects Page</h1>
}

export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await AboutInfo.find({}).populate("projects")
    const dev = JSON.parse(JSON.stringify(result[0]))

    const result2 = await ProjectInfo.find({}).populate("stack")
    const projects = JSON.parse(JSON.stringify(result2))

    const result3 = await TalentInfo.find({})
    const talents = JSON.parse(JSON.stringify(result3))
  
    return { props: { dev, projects, talents } }
  }