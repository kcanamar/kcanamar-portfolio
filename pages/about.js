import dbConnect from '@/utils/dbConnect'
import AboutInfo from '@/models/about'
import ProjectInfo from '@/models/project'
import styles from "../styles/About.module.css"
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import Talent from '@/components/about/talent'

export default function About() {

    return (
        <section className={styles.section}>    
            <div className={styles.containerTop}>
                <div className={styles.img}>
                    <CldImage
                        src="https://res.cloudinary.com/kcanamar/image/upload/v1676337247/portfolio/us-xmas-22_ebcu7n.jpg" 
                        alt="Kyle and his wife Jaime, in their home during christmas of 2022"
                        height="400"
                        width="300"
                        sizes=" (min-width: 480px) 50vw
                                (min-width: 768px) 33vw,
                                (min-width: 1200px) 25vw,
                                100vw"
                        loading="lazy"
                        crop="thumb"
                        gravity="center"
                    />
                </div>

                <div className={styles.bio}>
                    <h1 className={styles.head}>Heading</h1>
                    <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non. Imperdiet dui accumsan sit amet nulla. Senectus et netus et malesuada fames ac turpis. Nunc id cursus metus aliquam eleifend mi. Nulla facilisi etiam dignissim diam. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Iaculis at erat pellentesque adipiscing commodo elit. Feugiat pretium nibh ipsum consequat. Scelerisque eu ultrices vitae auctor eu augue ut. Sit amet massa vitae tortor condimentum.</p>
                </div>
            </div>
            <div className={styles.containerMid}>
                <div className={styles.why}>
                    <h1 className={styles.head}>Heading</h1>
                    <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non. Imperdiet dui accumsan sit amet nulla. Senectus et netus et malesuada fames ac turpis. Nunc id cursus metus aliquam eleifend mi. Nulla facilisi etiam dignissim diam. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Iaculis at erat pellentesque adipiscing commodo elit. Feugiat pretium nibh ipsum consequat. Scelerisque eu ultrices vitae auctor eu augue ut. Sit amet massa vitae tortor condimentum.</p>
                </div>

                <div className={styles.img}>
                    <CldImage 
                        src="https://res.cloudinary.com/kcanamar/image/upload/v1676337312/portfolio/Family_mzofoy.jpg"
                        alt="Kyle with his wife and kids by the waterfront in Tacoma, Washington"
                        height="400"
                        width="300"
                        sizes=" (min-width: 480px) 50vw
                                (min-width: 768px) 33vw,
                                (min-width: 1200px) 25vw,
                                100vw"
                        loading="lazy"
                        crop="thumb"
                        gravity="center"
                    />
                </div>
            </div>
            <div className={styles.containerBtm}>
                <h1 className={styles.subheading}>Technology Toolbox</h1>
                <div className={styles.talents}>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    <Talent title="Example" desc="Flexible interpreted language best known for breathing life into the DOM" link=""/>
                    
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await AboutInfo.find({}).populate("projects")
    const dev = JSON.parse(JSON.stringify(result[0]))

    const result2 = await ProjectInfo.find({}).populate("stack")
    const projects = JSON.parse(JSON.stringify(result2))
  
    return { props: { dev, projects } }
  }