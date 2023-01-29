import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"
import Image from "next/image";

export default function Project({ image, name, live, git }) {

    return (
        <div className="container-project">
            <div className="">
                <Link href="" target="_blank" rel="noopener noreferrer" >
                    <Image alt={name} src={image} width="544" height="306"/>
                </Link>
                <div className="project-content">
                    <h2 className="project-title">{name}</h2>
                    {/* tech stack used */}
                    <article>
                        {/* short description of project */}
                        <p>Mollit non qui irure ex ut. Non aute eu eu esse officia aute reprehenderit ut pariatur amet. Do consequat cillum excepteur sunt aute labore dolore.</p>
                    </article>
                </div>
                <div className="project-actions">
                    <Link href={live}><span className="project-cta">Live Site <BsArrowRight/></span></Link>
                    <Link href={git}><span className="project-cta">Git Repo <BsArrowRight/></span></Link>
                </div>
            </div>
        </div>
    )
}
