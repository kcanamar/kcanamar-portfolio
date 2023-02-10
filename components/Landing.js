import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import Project from "./Project"
import { useDevContext } from "@/utils/devContext"
import styles from "../styles/components/Landing.module.css"
import Card from "./Card"
import Image from "next/image"
import profilePic from "../public/pic.png"

export default function Landing() {
    const { value } = useDevContext()
    const { projects } = value.devContent
    return (
        <div className="landing">
            <section className={styles.sectionLg}>
                <div className={styles.container}>

                        <div className={styles.left}>
                            <h4 className={styles.preTitle}>Hello,</h4>
                            <h1 className={styles.title}>I&apos;m Kyle Canamar</h1>
                            <h4 className={styles.subTitle}>Traversing the tech world with grit and optimisim. </h4>
                        </div>
                        
                        <div className={styles.right}>
                            <Image 
                                src={profilePic}
                                alt="Headshot of Kyle."
                                placeholder="blur"
                                priority
                            />
                        </div>
                </div>
            </section>

            <section className={styles.sectionSm}>
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
            </section>

            <section className={styles.sectionLg}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <h3 className={styles.heading}>Recent Projects</h3>
                        <Link href="#projects"><span className={styles.link}>All Projects</span> <BsArrowRight/></Link>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.recent}>
                            {projects.slice(0, 4).map((project, idx) => {
                                return <Project key={idx} project={project}/>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}