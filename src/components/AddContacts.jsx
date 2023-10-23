import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contactSlice";

const AddContacts = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addContact(input))
        setInput('')
    }

    return (
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default AddContacts;