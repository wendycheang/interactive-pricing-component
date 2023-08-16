import "../css/feature_line.css"
import icon from "../images/icon-check.svg"

const FeatureLine = ({text}) => {

    return (
        <div className="feature-line"> 
            <img src={icon} alt="checkmark"/>
            <p>{text}</p>
        </div>
    )
}

export default FeatureLine