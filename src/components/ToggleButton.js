import "../css/toggle_button.css"

const ToggleButton = ({handleClick}) => {

    return (
        <label className="toggle_switch">
            <input onClick={handleClick} type="checkbox" />
            <span className="toggle_button" ></span>
        </label>
    )
}

export default ToggleButton