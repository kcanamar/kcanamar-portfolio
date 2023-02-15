import dbConnect from '@/utils/dbConnect'
import AboutInfo from '@/models/about'
import ProjectInfo from '@/models/project'
import TalentInfo from '@/models/talent'
import styles from "../styles/About.module.css"
import { CldImage } from 'next-cloudinary'
import Talent from '@/components/about/talent'

export default function About({ talents }) {

    return (
        <section className={styles.section}>    
            <h1 className={styles.subheading}>About</h1>
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
                    <h1 className={styles.head}>My Story</h1>
                    <br/>
                    <p className={styles.content}>My name is Kyle Canamar my pronuouns are He/Him, a father of three boys and married to the love of my life. Having changed careers a few times in my life, all in the pursuit of happiness, I have learned along the way that the grass is not always greener on the other side, more over that the grass is the greenest where I decide to take care of my self and those around me. This growth mindest really set in as I began my journey into the technology industry by attending a bootcamp in Full-Stack Software engineering at General Assembly. </p>
                    <br/>
                    <p className={styles.content}>I found that the struggles of working through bugs and errors were no different than working through unruly guests, supply chain challenges, staffing shortage in a restaurant or leading a re-roofing project to repairing leaks on commercial buidlings. I learned that above all else I enjoy problem solving, and producing a high quality result through courage, curiosity, compassion, collaboration, and competition. I am not afraid of receiving feedback in fact I encourage it. If you are reading this and see something that I could do better, please reach out and let me know. </p>
                </div>
            </div>
            <div className={styles.containerMid}>
                <div className={styles.why}>
                    <h1 className={styles.head}>Why</h1>
                    <br/>
                    <p className={styles.content}>Family, they are the reason I get out of bed saying &apos;It is going to be the best day ever.&apos; I do my best to role model for my three boys what good sportsmanship, grace, accountablitiy and empathy look like in today&apos;s world. I enjoy sharing with my children how to learn and how to grow in their own ways and find their own passions.</p>
                    <br/>
                    <p className={styles.content}>I love my wife so much that I find myself looking for my ego beacuse I seem to have lost it. I have learned that a healthy relationship is built on trust. The 13 core values forming the foundation of our communication are from the book The Speed of Trust. Talk Straight, Demonstrate Respect, Create Transparency, Right Wrongs, Show Loyalty, Deliver Results, Confront Reality, Clarify Expecations, Practice Accountability, Listen First, Keep Commitments, Extend Trust, all of those leading to the final value of Get Better.</p>
                    <br/>
                    <p className={styles.content}>We practice these daily and have been the biggest source of accountability and ownership of our actions. It is through demostrating these values that we are able to role model for our children when it works and when it does not work. Lets face it we are still human and make mistakes. We are not perfect but we have built a way for us to hold each other accountable. I love my life, my wife, and my children I could go on and on about them and what we do, so if you are curious and want to know more feel free to connect with me and lets have some coffee or tea and get to know each other more.</p>
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
                    {
                        talents.map((talent, idx) => {
                            const {title, desc, link, icon} = talent
                            return <Talent 
                                key={idx} 
                                title={title} 
                                desc={desc} 
                                link={link} 
                                icon={icon}
                            />
                        })
                    }
                    
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

    const result3 = await TalentInfo.find({})
    const talents = JSON.parse(JSON.stringify(result3))
  
    return { props: { dev, projects, talents } }
  }