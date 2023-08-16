import "../css/slider_section.css"
import Slider from "./Slider"
import ToggleButton from "./ToggleButton"

const SliderSection = ({sliderValue, sliderMin, sliderMax, cost, pageviews, handleSlider, toggleDiscount}) => {

    return (
        <div className="pricing-section">
            <div className="pricing__container">
                <p className="pageview">{`${pageviews} Pageviews`}</p>
                <Slider value={sliderValue} min={sliderMin} max={sliderMax} updateValue={handleSlider} />
                <p className="price_line"><span className="pricing">{`$${cost}`}</span>/month</p>
            </div>
            <div className="toggle__section" >
                <div className="length__toggle">
                    <p>Monthly Billing</p>
                    <ToggleButton handleClick={toggleDiscount} />
                    <p>Yearly Billing</p>
                </div >
                <p className="discount">25%</p>
                <p className="discount-desktop">25% discount</p>
            </div>
        </div>
    )
}

export default SliderSection