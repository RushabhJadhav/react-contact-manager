import { useState } from "react";
import Form from "./Form";

const AddContacts = () => {
    const [display, setDisplay] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setDisplay(prevState => !prevState)
    }

    return (
        <>
            <div className="add-cont">
                <input type="text" placeholder="Search contacts..." />
                <button onClick={handleSubmit}>+</button>
            </div>
            <Form showForm={display} />
        </>
    )
}

export default AddContacts;