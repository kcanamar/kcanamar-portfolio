import Footer from "./Footer"
import Nav from "./Nav"

export default function Layout({ children, home}) {

    return (
        <div className="layout">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}