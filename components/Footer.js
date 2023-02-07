import Link from "next/link";
import { useDevContext } from "@/utils/devContext";
import styles from "../styles/components/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faTwitter,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const { value } = useDevContext()
    const { git, linked, twitter} = value.devContent
    
    return (
        <section className={styles.footer}>
            <div className={styles.socials}>
                <Link 
                    href={git} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link 
                    href={linked} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
                <Link 
                    href={twitter} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                </Link>
            </div>
            <div className={styles.copy}>
                <small> © Kcanamar All rights reserved</small>
            </div>
        </section>
    )
}