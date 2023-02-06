import Link from "next/link"
import { useState } from "react"
import { useDevContext } from "@/utils/devContext"

export default function Nav() {
    // desructure the value from context
    const { value } = useDevContext()
    // destructure property needed for component
    const { name } = value.devContent

    const [active, setActive] = useState('#')
    return (
        <nav>
            
            <div className="left-nav">
                <Link 
                    href="/"
                    onClick={() => setActive('#')}
                    className={active === '#' ? 'active dev' : "dev"}
                    >
                        {name}
                </Link>
            </div>
            <div className="right-nav">
                <Link 
                    href="#about"
                    onClick={() => setActive('#about')}
                    className={active === '#about' ? 'active' : ""}
                    >
                        About
                </Link>
                <Link 
                    href="#projects"
                    onClick={() => setActive('#projects')}
                    className={active === '#projects' ? 'active' : ""}
                    >
                        Projects
                </Link>
                <Link 
                    href="#contact"
                    onClick={() => setActive('#contact')}
                    className={active === '#contact' ? 'active' : ""}
                    >
                        Contact
                </Link>
                <Link 
                    href=""
                    >
                        Resume
                </Link>
            </div>

        </nav>
    )
}