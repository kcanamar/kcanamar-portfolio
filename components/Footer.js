import Link from "next/link";
import { useDevContext } from "@/utils/devContext";

export default function Footer() {

    const { value } = useDevContext()
    const { git, linked, twitter} = value.devContent
    
    return (
        <section className="footer">

            <ul className="footer-menu">
                <li><Link href="#">Top</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#contact">Contact</Link></li>
                <li><Link href="">Resume</Link></li>
            </ul>
            <div className="socials">
                <Link href={git}>GitHub</Link>
                <Link href={linked}>LinkedIn</Link>
                <Link href={twitter}>LinkedIn</Link>
            </div>
            <div>
                <small> © Kcanamar. All rights reserved.</small>
            </div>
        </section>
    )
}