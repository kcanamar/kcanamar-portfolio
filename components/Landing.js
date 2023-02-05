import Hero from "./Hero"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import Project from "./Project"

export default function Landing({dev}) {

    return (
        <section className="landing">
            <Hero/>
            <div className="projects">
                <div className="projects-header">
                    <h3 className="projects-subtitle">Recent Projects</h3>
                    <Link href="#projects"><span className="project-cta">All Projects <BsArrowRight/></span></Link>
                </div>

                <div className="recent-projects">
                    {dev.projects.slice(0, 4).map((project, idx) => {
                        return <Project key={idx} project={project}/>
                    })}
                </div>

            </div>
        </section>
    )
}