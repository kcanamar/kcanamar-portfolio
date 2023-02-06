import Link from "next/link"
import { useState } from "react"
import { useDevContext } from "@/utils/devContext"
import styles from "../styles/components/Nav.module.css"

export default function Nav() {
    // desructure the value from context
    const { value } = useDevContext()
    // destructure property needed for component
    const { name } = value.devContent

    const [active, setActive] = useState('#')
    return (
        <nav className={styles.nav}>
            
            <div className={styles.left}>
                <Link 
                    href="/"
                    onClick={() => setActive('#')}
                    id={active === '#' ? styles.active : ""}
                    >
                        {name}
                </Link>
            </div>
            <div className={styles.right}>
                <Link 
                    href="#about"
                    onClick={() => setActive('#about')}
                    id={active === '#about' ? styles.active : ""}
                    >
                        About
                </Link>
                <Link 
                    href="#projects"
                    onClick={() => setActive('#projects')}
                    id={active === '#projects' ? styles.active : ""}
                    >
                        Projects
                </Link>
                <Link 
                    href="#contact"
                    onClick={() => setActive('#contact')}
                    id={active === '#contact' ? styles.active : ""}
                    >
                        Contact
                </Link>
                <Link 
                    href="/blog"
                    onClick={() => setActive('#blog')}
                    id={active === '#blog' ? styles.active : ""}
                    >
                        Blog
                </Link>
                {/* Todo link to google pdf view of current resume */}
                <Link 
                    href=""
                    >
                        Resume
                </Link>
            </div>

        </nav>
    )
}