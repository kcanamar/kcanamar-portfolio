import { BsBoxArrowUpRight } from "react-icons/bs"
import styles from "../styles/components/Card.module.css"

export default function Card({ title, subTitle }) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.cta}>
                    <h4 className={styles.subtitle}>{subTitle}</h4>
                    <span className={styles.icon}><BsBoxArrowUpRight/></span>
                </div>
            </div>
        </div>
    )
}