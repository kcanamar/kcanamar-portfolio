import Hero from "./Hero"
import Footer from "./Footer"
import Nav from "./Nav"

export default function Layout({ children, home, dev}) {
    const socials = {
        git: dev.git,
        linked: dev.linked,
        twitter: dev.twitter
    }

    return (
        <div className="layout">
            <Nav name={dev.name}/>
            {children}
            <Footer socials={socials}/>
        </div>
    )
}