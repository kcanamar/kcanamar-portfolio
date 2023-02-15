import dbConnect from '@/utils/dbConnect'
import AboutInfo from '@/models/about'
import ProjectInfo from '@/models/project'
import TalentInfo from '@/models/talent'
import Project from '@/components/Project'
import styles from '../styles/Projects.module.css'
import Layout from '@/components/Layout'

export default function Projects({ projects, dev }) {

    return (
        <Layout dev={dev}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.subHead}>Projects Gallery</h1>
                    <div className={styles.gallery}>
                        {
                            projects.map((project, idx) => {
                                return <Project key={idx} project={project} />
                            })
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
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