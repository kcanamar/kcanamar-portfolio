import Link from "next/link"
import styles from "../../styles/components/Talent.module.css"
import DynamicSiIcon from "./Icon"

export default function Talent(props) {

    const { title, desc, link, icon } = props

    return (
        <Link href={link} target="_blank" rel="noopener norefferer" className={styles.talent}>
            <h4 className={styles.thead}>{title} <DynamicSiIcon name={icon} /></h4>
            <p className={styles.desc}>{desc}</p>
        </Link>
    )
}