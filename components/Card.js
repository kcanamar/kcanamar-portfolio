import { BsBoxArrowUpRight } from "react-icons/bs"

export default function Card({ title, subTitle }) {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <h4 className="subtitle">{subTitle}</h4>
                <span className="card-icon"><BsBoxArrowUpRight/></span>
            </div>
        </div>
    )
}