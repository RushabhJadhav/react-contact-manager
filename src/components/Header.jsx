import DarkMode from "./DarkMode";

const Header = ({darkMode, setDarkMode}) => {
    return (
        <div className="header">
            <h1>Contact Manager</h1>
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}

export default Header