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
            <div>
                <input type="text" placeholder="search contacts..." />
                <button onClick={handleSubmit}>Add</button>
            </div>
            <Form showForm={display} />
        </>
    )
}

export default AddContacts;