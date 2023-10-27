import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Contacts = () => {
    const contacts = useSelector((state) => state.contact.contactItem)

    return (
        <ul>
            {
                contacts.map(item => {
                    return (
                        <li key={item.id}>
                            <p><span>Name</span> : {`${item.obj.firstName} ${item.obj.lastName}`}</p>
                            <p><span>No.</span> : {item.obj.number}</p>
                            <p><span>Email</span> : {item.obj.email}</p>
                            <div className="icons-cont">
                                <button className="icons">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                                <button className="icons">
                                    <a href="tel:8355907597">
                                    <FontAwesomeIcon icon={faSquarePhoneFlip} />
                                    </a>
                                </button>
                                <button className="icons">
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Contacts;