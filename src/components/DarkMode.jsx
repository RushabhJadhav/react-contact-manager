import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import { faSun } from "@fortawesome/free-regular-svg-icons"

const DarkMode = ({darkMode, setDarkMode}) => {

    const handleClick = () => {
        setDarkMode(prevState => !prevState)
    }

    return (
        <>
            <div className="dark-mode-cont" onClick={handleClick}>
                {
                    darkMode ?
                    <FontAwesomeIcon icon={faMoon} /> :
                    <FontAwesomeIcon icon={faSun} />
                }
            </div>
        </>
    )
}

export default DarkMode