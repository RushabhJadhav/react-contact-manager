import { useSelector } from "react-redux";

const Contacts = () => {
    const contacts = useSelector((state) => state.contactItem)
    console.log(contacts)

    return (
        <ul></ul>
    )
}

export default Contacts;