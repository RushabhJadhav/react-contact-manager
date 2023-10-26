import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contactSlice";

const Form = ({showForm}) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addContact(input))
        setInput('')
    }

    return (
        <form style={{display: showForm ? 'block' : 'none'}} onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={input} onChange={e => setInput(e.target.value)} />
            <input type="text" placeholder="Last Name" />
            <input type="tel" placeholder="Phone number" />
            <input type="email" placeholder="Email" />
            <button type="submit">Add Contact</button>
        </form>
    )
}

export default Form;