import { useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMoon } from "@fortawesome/free-regular-svg-icons"
// import { faSun } from "@fortawesome/free-regular-svg-icons"

const DarkMode = () => {
    const [checked, setChecked] = useState(false)

    const handleCheckbox = () => {
        setChecked(prevState => !prevState)
    }

    return (
        <>
            <label className="toggle-switch">
                <input type="checkbox" checked={checked} onChange={handleCheckbox} />
                <span className="slider"></span>
            </label>
        </>
    )
}

export default DarkMode