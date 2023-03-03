import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import Project from "./project/Project"
import { useDevContext } from "@/utils/devContext"
import styles from "../styles/components/Landing.module.css"
import Card from "./Card"
import Image from "next/image"
import profilePic from "../public/pic.png"

export default function Landing({dev}) {
    const { projects } = dev
    return (
        <div className="landing">
            <section className={styles.section}>
                <div className={styles.containerTop}>

                        <div className={styles.left}>
                            <h4 className={styles.preTitle}>Hello,</h4>
                            <h1 className={styles.title}>I&apos;m Kyle Canamar</h1>
                            <h4 className={styles.subTitle}>Traversing this world with Grit and Optimisim. </h4>
                        </div>
                        
                        <div className={styles.right}>
                            <Image 
                                src={profilePic}
                                alt="Headshot of Kyle."
                                height={500}
                                width={550}
                                placeholder="blur"
                                priority
                            />
                        </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.cards}>
                        <div className={styles.cardA}>
                            <Link href="/projects" >
                                <Card title="Projects" subTitle="Check out my projects"/>
                            </Link>
                        </div>
                        <div className={styles.cardB}>
                            <Link href="/about" >
                                <Card title="About" subTitle="Learn more about me"/>
                            </Link>
                        </div>
                        <div className={styles.cardC}>
                            <Link href="/blog" >
                                <Card title="Blog" subTitle="Read my blog posts"/>
                            </Link>
                        </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.containerBtm}>
                    <div className={styles.top}>
                        <h3 className={styles.heading}>Recent Projects</h3>
                        <Link href="/projects"><span className={styles.link}>All Projects</span> <BsArrowRight/></Link>
                    </div>

                    <div className={styles.bottom}>
                        {projects.slice(0, 4).map((project, idx) => {
                                return <Project key={idx} project={project}/>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}