import "../css/pricing_display.css"
import {useState} from 'react'
import SliderSection from "./SliderSection"
import FeatureLine from "./FeatureLine"

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const SLIDER_ARRAY = [
    {
        views: "10k",
        cost: 8
    },
    {
        views: "50k",
        cost: 12
    },
    {
        views: "100k",
        cost: 16
    },
    {
        views: "500k",
        cost: 24
    },
    {
        views: "1M",
        cost: 36
    }
]

const PricingDisplay = () => {
    
    const [sliderValue, setSliderValue] = useState(0)
    const [useDiscount, setUseDiscount] = useState(false)

    const pageViews = SLIDER_ARRAY[sliderValue].views
    const cost = useDiscount ? SLIDER_ARRAY[sliderValue].cost * 3/4 : SLIDER_ARRAY[sliderValue].cost

    const printFormValues = () => {
        console.log({
            pageViews,
            cost
        })
    }

    return (
        <div className="purchase-section">
            <SliderSection cost={cost} 
            pageviews={pageViews} 
            sliderValue={sliderValue}
            sliderMin={0}
            sliderMax={SLIDER_ARRAY.length - 1}
            handleSlider={setSliderValue} 
            toggleDiscount={() => setUseDiscount((prev) => !prev)} />
            <div className="second-section">
                <div className="features-list">
                    <FeatureLine text="Unlimited websites"/>
                    <FeatureLine text="100% data ownership"/>
                    <FeatureLine text="Email reports"/>
                </div>
                <button className="signup-button" onClick={printFormValues}>Start my trial</button>
            </div>
        </div>
    )
}

export default PricingDisplay