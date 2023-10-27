import { useSelector } from "react-redux";

const Contacts = () => {
    const contacts = useSelector((state) => state.contact.contactItem)

    return (
        <ul>
            {
                contacts.map(item => {
                    console.log(item)
                    return (
                        <li key={item.id}>
                            <h2>Name : {`${item.obj.firstName} ${item.obj.lastName}`}</h2>
                            <h2>Number : {item.obj.number}</h2>
                            <h2>email : {item.obj.email}</h2>
                            <div>
                                <button>Edit</button>
                                <button>Call</button>
                                <button>Delete</button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Contacts;