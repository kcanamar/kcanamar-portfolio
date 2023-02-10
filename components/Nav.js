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
        <header className={styles.header}>
            
            <div className={styles.left}>
                <Link 
                    href="/"
                    >
                        {name}
                </Link>
            </div>

            <button></button>


            <div className={styles.right}>
                <Link 
                    href="/about"
                    >
                        About
                </Link>
                <Link 
                    href="/projects"
                    >
                        Projects
                </Link>
                <Link 
                    href="/contact"
                    >
                        Contact
                </Link>
                <Link 
                    href="/blog"
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

        </header>
    )
}