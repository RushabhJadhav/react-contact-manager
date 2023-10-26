import { useSelector } from "react-redux";

const Contacts = () => {
    const contacts = useSelector((state) => state.contact.contactItem)

    return (
        <ul>
            {
                contacts.map(item => {
                    return <li key={item.id}>{item.text}</li>
                })
            }
        </ul>
    )
}

export default Contacts;