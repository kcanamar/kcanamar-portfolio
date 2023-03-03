import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"
import Image from "next/image";
import styles from "../../styles/components/Project.module.css"

export default function Project({ project }) {

    const {name, image, live, git, stack} = project

    return (
            <article className={styles.project}>
                <div className={styles.img}>
                    <Image alt={name} src={image} width="420" height="240"/>
                </div>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.stack}>
                    {stack.map((tech, idx) => {
                        return <h5 className={styles.tech} key={idx}>{tech}</h5>
                    })}
                </div>
                <p className={styles.desc}>Mollit non qui irure ex ut. Non aute eu eu esse officia aute reprehenderit ut pariatur amet. Do consequat cillum excepteur sunt aute labore dolore.</p>
                <div className={styles.links}>
                    <Link className={styles.link} href={live} target="_blank" rel="noopener noreferrer"><span>Live Site</span><BsArrowRight/></Link>
                    <Link className={styles.link} href={git} target="_blank" rel="noopener noreferrer"><span>Git Repo</span><BsArrowRight/></Link>
                </div>
            </article>
    )
}
