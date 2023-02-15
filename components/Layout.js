import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout({ children, home, dev}) {

    return (
        <>
            <Nav dev={dev}/>
            <div className="layout">
                {children}
            </div>
            <Footer dev={dev}/>
        </>
    )
}