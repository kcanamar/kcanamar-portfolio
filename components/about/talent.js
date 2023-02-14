import Link from "next/link"
import styles from "../../styles/components/Talent.module.css"

export default function Talent(props) {

    const { title, desc, link } = props

    return (
        <article className={styles.talent}>
            <h4 className={styles.thead}>{title}</h4>
            <p className={styles.desc}>{desc}</p>
            <Link href={link} className={styles.btn}>View the Docs</Link>
        </article>
    )
}