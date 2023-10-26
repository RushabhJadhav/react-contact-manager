import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contactSlice";

const Form = ({showForm}) => {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        number: '',
        email: ''
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addContact({name: input}))
        setInput({firstName: '', lastName: '', number: 0, email: ''})
    }

    return (
        <form style={{display: showForm ? 'block' : 'none', width: '200px'}} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="First Name" 
                value={input.firstName} 
                onChange={e => setInput({...input, firstName: e.target.value})} 
            />
            <input 
                type="text" 
                placeholder="Last Name" 
                value={input.lastName} 
                onChange={e => setInput({...input, lastName: e.target.value})} 
            />
            <input 
                type="tel" 
                placeholder="Phone number" 
                value={input.number} 
                onChange={e => setInput({...input, number: e.target.value})}
            />
            <input 
                type="email" 
                placeholder="Email"
                value={input.email} 
                onChange={e => setInput({...input, email: e.target.value})} 
            />
            <button type="submit">Add Contact</button>
        </form>
    )
}

export default Form;