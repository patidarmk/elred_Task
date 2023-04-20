import edit from "../../../assets/edit.svg";
import contactsvg from "../../../assets/contact.svg";
import mail from "../../../assets/mail.svg";
import phone from "../../../assets/phone.svg";
import "./Contact.css";
import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import EditContact from "./EditContacts";
const Contact = () => {
  const [toggle, setToggle] = useState(0);
  const showModel = () => {
    setToggle(1);
  };
  const hideModel = () => {
    setToggle(0);
  };

  if (
    JSON.parse(localStorage.getItem("contacts")) === "" ||
    JSON.parse(localStorage.getItem("contacts")) == null
  ) {
    localStorage.setItem("contacts", JSON.stringify(ContactList));
  }
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );

  const updateContactList = (updateContact) => {
    setContacts(updateContact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setToggle(0);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    JSON.parse(localStorage.getItem("contacts"));
  }, [contacts]);

  return (
    <div className="contact">
      <div className="contact-heading-container">
        <div className="contact-heading">
          <img className="contact-item-svg" src={contactsvg} alt="svg" />
          <span className="contact-heading-title">Contact</span>
        </div>
        <img
          onClick={showModel}
          className="contact-item-svg-edit"
          src={edit}
          alt="svg"
        />
      </div>
      <div className="contact-item-email">
        <div className="contact-item-email">
          <img className="contact-item-svg-small" src={mail} alt="svg" />
          <span className="contact-item-text">
            {contacts[0].email.join(" / ")}
          </span>
        </div>
        {contacts.length > 1 && (
          <div className="contact-item-count">+{contacts.length - 1}</div>
        )}
      </div>
      <div className="contact-item-phone">
        <img className="contact-item-svg-small" src={phone} alt="svg" />
        <span className="contact-item-text">
          {contacts[0].phone.join(" / ")}
        </span>
      </div>
      <EditContact
        toggle={toggle}
        hideModel={hideModel}
        contacts={contacts}
        updateContactList={updateContactList}
      />
    </div>
  );
};

export default Contact;
