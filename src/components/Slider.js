import "../css/slider.css"

const Slider = ({value, updateValue, min, max}) => {

    const sliderPercent = `${(value - min)/(max - min) * 100}%`

    return (
        <input id="myRange" 
        className="slider styled-slider slider-progress" 
        type="range" 
        style={{"--slider-ratio": sliderPercent}}
        min={min} 
        max={max} 
        step="1" 
        value={value} 
        onChange={(event) => updateValue(event.target.value)} />
    )
}

export default Slider