import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"
import Image from "next/image";

export default function Project({ project }) {

    const {name, image, live, git, stack} = project

    return (
        <section className="">
            <div className="">
                <div className="">
                    <h2 className="">{name}</h2>
                    <div>
                        {stack.map((tech, idx) => {
                            return <h5 key={idx}>{tech}</h5>
                        })}
                    </div>
                    <article>
                        {/* short description of project */}
                        <p>Mollit non qui irure ex ut. Non aute eu eu esse officia aute reprehenderit ut pariatur amet. Do consequat cillum excepteur sunt aute labore dolore.</p>
                    </article>
                </div>
                <Link href="" target="_blank" rel="noopener noreferrer" >
                    <Image alt={name} src={image} width="544" height="306"/>
                </Link>
                <div className="">
                    <Link href={live} target="_blank" rel="noopener noreferrer"><span className="project-cta">Live Site <BsArrowRight/></span></Link>
                    <Link href={git} target="_blank" rel="noopener noreferrer"><span className="project-cta">Git Repo <BsArrowRight/></span></Link>
                </div>
            </div>
        </section>
    )
}
