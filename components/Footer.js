import Link from "next/link";
import styles from "../styles/components/Footer.module.css"
import {
    FaLinkedinIn,
    FaGithub,
    FaTwitter,
    FaMailBulk
} from "react-icons/fa"

export default function Footer() {
    
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <Link 
                    href="/contact"
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FaMailBulk/>
                </Link>
                <Link 
                    href="https://github.com/kcanamar"
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FaGithub/>
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/kyle-canamar/"
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FaLinkedinIn/>
                </Link>
                <Link 
                    href="https://twitter.com/funcy_koder"
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FaTwitter/>
                </Link>
            </div>
            <div className={styles.copy}>
                <div>Kyle Canamar</div>
                <div>©</div>
                <div>2023</div>
                <div> • </div>
                <Link href="/"> KCanamar</Link>
            </div>
        </footer>
    )
}