import Card from "./Card"
import Link from "next/link"

export default function Hero() {
    
    return (
         <section className="hero">
            <div className="container-hero">
                <div className="hero-intro">
                    <h1 className="hero-title">Hi, I'm Kyle Canamar</h1>
                    <h4 className="subtitle">Traversing the tech world with self-taught skills combined with a love for coding and professional development. </h4>

                    <div className="hero-cards">
                        <Link href="" >
                            <Card title="Projects" subTitle="Check out my projects"/>
                        </Link>
                        <Link href="" >
                            <Card title="About" subTitle="Learn more about me"/>
                        </Link>
                        <Link href="/blog" >
                            <Card title="Blog" subTitle="Read my blog posts"/>
                        </Link>
                    </div>
                </div>
            </div>
         </section>
    )
}