import Link from "next/link";
import { useDevContext } from "@/utils/devContext";
import styles from "../styles/components/Footer.module.css"
import {
    FaLinkedinIn,
    FaGithub,
    FaTwitter
} from "react-icons/fa"

export default function Footer() {

    const { value } = useDevContext()
    const { git, linked, twitter} = value.devContent
    
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <Link 
                    href={git} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FaGithub/>
                </Link>
                <Link 
                    href={linked} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FaLinkedinIn/>
                </Link>
                <Link 
                    href={twitter} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FaTwitter/>
                </Link>
            </div>
            <div className={styles.copy}>
                <small> © Kcanamar All rights reserved</small>
            </div>
        </footer>
    )
}