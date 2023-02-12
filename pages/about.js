import dbConnect from '@/utils/dbConnect'
import AboutInfo from '@/models/about'
import styles from "../styles/About.module.css"
import Link from 'next/link'
import Image from 'next/image'
import BioPic from "../public/us-xmas-22.jpg"
import WhyPic from "../public/my-why.jpeg"

export default function About() {

    return (
        <section className={styles.section}>    
            <div className={styles.containerTop}>
                <div className={styles.img}>
                    <Image 
                        src={BioPic} 
                        alt=""
                        height="700"
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
                    <Image 
                        src={WhyPic} 
                        alt=""
                        height="700"
                    />
                </div>
            </div>
            <div className={styles.containerBtm}>
                <h1 className={styles.subheading}>Talents</h1>
                <div className={styles.talents}>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
                    <article className={styles.talent}>
                        <h4 className={styles.thead}>Example</h4>
                        <p className={styles.desc}>Flexible interpreted language best known for breathing life into the DOM</p>
                        <Link href="" className={styles.btn}>View the Docs</Link>
                    </article>
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
  
    return { props: { dev } }
  }