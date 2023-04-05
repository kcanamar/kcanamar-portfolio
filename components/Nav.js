import Link from "next/link"
import { useState } from "react"
import styles from "../styles/components/Nav.module.css"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import useDownloader from "react-use-downloader"

export default function Nav() {

    // Resume download setup
    const { download } = useDownloader()
    const fileUrl = "/Kyle_Canamar_Resume.pdf"
    const filename = "Kyle_Canamar_Resume.pdf"

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
                        KCanamar
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
                        href="/"
                        onClick={() => LinkHandler()}

                        >
                            Home
                    </Link>
                </li>
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

                {/* Relocating Blog to its own site */}
                {/* <li>
                    <Link
                        href="/blog"
                        onClick={() => LinkHandler()}
                        >
                            Blog
                    </Link>
                </li> */}
                <li>
                    <Link
                        href=""
                        onClick={() => download(fileUrl, filename)}
                        download
                        >
                            Resume
                    </Link>
                </li>
            </ul>

        </header>
    )
}