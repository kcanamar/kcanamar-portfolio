import Hero from "./Hero"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import Project from "./Project"
import { useDevContext } from "@/utils/devContext"
import styles from "../styles/components/Landing.module.css"
import Card from "./Card"

export default function Landing() {
    const { value } = useDevContext()
    const { projects } = value.devContent
    return (
        <section className="landing">
            <Hero/>
            <div className={styles.cards}>
                    <Link href="#projects" >
                        <Card title="Projects" subTitle="Check out my projects"/>
                    </Link>
                    <Link href="#about" >
                        <Card title="About" subTitle="Learn more about me"/>
                    </Link>
                    <Link href="/blog" >
                        <Card title="Blog" subTitle="Read my blog posts"/>
                    </Link>
            </div>
            <div className="projects">
                <div className="projects-header">
                    <h3 className="projects-subtitle">Recent Projects</h3>
                    <Link href="#projects"><span className="project-cta">All Projects <BsArrowRight/></span></Link>
                </div>

                <div className="recent-projects">
                    {projects.slice(0, 4).map((project, idx) => {
                        return <Project key={idx} project={project}/>
                    })}
                </div>

            </div>
        </section>
    )
}