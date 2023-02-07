import styles from "../styles/components/Hero.module.css"
import Image from "next/image"
import profilePic from "../public/pic.png"

export default function Hero() {
    
    return (
         <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.intro}>
                    <div className={styles.left}>
                        <h4 className={styles.preTitle}>Hello,</h4>
                        <h1 className={styles.title}>I&apos;m Kyle Canamar</h1>
                        <h4 className={styles.subTitle}>Traversing the tech world with grit and optimisim. </h4>
                    </div>
                    <div className={styles.right}>
                        <Image 
                            src={profilePic}
                            alt="Headshot of Kyle."
                            placeholder="blur"
                            priority
                        />
                    </div>
                </div>
            </div>
         </section>
    )
}