import Card from "./Card"

export default function Hero() {
    
    return (
         <section className="hero">
            <div className="container-hero">
                <div className="hero-intro">
                    <h1 className="hero-title">Hi, I'm Kyle Canamar</h1>
                    <h4 className="subtitle">Traversing the tech world with self-taught skills combined with a love for coding and professional development. </h4>

                    <div className="hero-cards">
                        <Card title="Projects" subTitle="Check out my projects"/>
                        <Card title="About" subTitle="Learn more about me"/>
                        <Card title="Blog" subTitle="Read my blog posts"/>
                    </div>
                </div>
            </div>
         </section>
    )
}