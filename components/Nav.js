import Link from "next/link"
import { useState } from "react"
import { useDevContext } from "@/utils/devContext"
import styles from "../styles/components/Nav.module.css"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"

export default function Nav() {
    // desructure the value from context
    const { value } = useDevContext()
    // destructure property needed for component
    const { name } = value.devContent

    // Menu State
    const [showMenu, setShowMenu] = useState("false")
    const MenuHandler = () => (showMenu === "false") ? setShowMenu("true") : setShowMenu("false")
    const LinkHandler = () => {if (showMenu === "true") setShowMenu("false")}

    return (
        <header className={styles.header}>
            
            <div className={styles.logo}>
                <Link 
                    href="/"
                    >
                        {name}
                </Link>
            </div>

            <button 
                className={styles.navToggle}
                data-visible={showMenu}
                onClick={() => MenuHandler()}
            >
                {showMenu === "true" ? <MdClose/> : <FiMenu/> }
            </button>


            <ul 
                className={styles.primaryNav}
                data-visible={showMenu}
            >
                <li>
                    <Link
                        href="/about"
                        onClick={() => LinkHandler()}

                        >
                            About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        onClick={() => LinkHandler()}
                        >
                            Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        onClick={() => LinkHandler()}
                        >
                            Contact
                    </Link>
                </li>
                <li>
                    <Link
                        href="/blog"
                        onClick={() => LinkHandler()}
                        >
                            Blog
                    </Link>
                </li>
                {/* Todo link to google pdf view of current resume */}
                <li>
                    <Link
                        href=""
                        // todo need a handler to close menu after download
                        >
                            Resume
                    </Link>
                </li>
            </ul>

        </header>
    )
}