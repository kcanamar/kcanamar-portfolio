import Link from "next/link";


export default function Footer({socials}) {

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
                <Link href={socials.git}>GitHub</Link>
                <Link href={socials.linked}>LinkedIn</Link>
            </div>
            <div>
                <small> © Kcanamar. All rights reserved.</small>
            </div>
        </section>
    )
}