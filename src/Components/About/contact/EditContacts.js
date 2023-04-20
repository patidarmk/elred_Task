import "./EditContacts.css";
import back_svg from "../../../assets/back.svg";
import contact_svg from "../../../assets/contact.svg";
import mail_svg from "../../../assets/mail.svg";
import phone_svg from "../../../assets/phone.svg";
import edit_svg from "../../../assets/edit.svg";
import delete_svg from "../../../assets/delete.svg";
import UpdateContact from "./UpdateContacts";
import { useState } from "react";

const EditContact = ({ toggle, hideModel, contacts, updateContactList }) => {
  const [editItem, setEditItem] = useState();
  const [isEdit, setIsEdit] = useState(1);

  const actionHandler = (action, id) => {
    if (action === "EDIT") {
      setEditItem(id);
      setIsEdit(0);
    }
    if (action === "DELETE") {
      let updatedContact = contacts.filter((contact) => contact.id !== id);
      updateContactList(updatedContact);
    }
  };

  const CloseWindow = () => {
    hideModel();
    setIsEdit(1);
  };

  return (
    <>
      {toggle === 1 && (
        <div className="view-box">
          <div className="view-box-header">
            <img
              onClick={CloseWindow}
              className="view-box-svg-back"
              src={back_svg}
              alt="back"
            />
            <span className="view-box-heading">Contacts</span>
          </div>
          <div>
            <p>please provide the company's email & contacts</p>
          </div>
          {isEdit === 1 &&
            contacts.map((item) => {
              return (
                <div className="view-box-content">
                  <div className="view-box-contact-header">
                    <div className="view-box-contact-main">
                      <img
                        className="view-box-svg-primary"
                        src={contact_svg}
                        alt="back"
                      />
                      <span className="view-box-contact-title">
                        {item.title}
                      </span>
                    </div>
                    <div className="view-box-contact-aside">
                      <img
                        onClick={() => actionHandler("DELETE", item.id)}
                        className="view-box-contact-secondary"
                        src={delete_svg}
                        alt="back"
                      />
                      <img
                        onClick={() => actionHandler("EDIT", item.id)}
                        className="view-box-contact-secondary"
                        src={edit_svg}
                        alt="back"
                      />
                    </div>
                  </div>
                  <div className="view-box-contact-aside">
                    <img
                      className="view-box-contact-secondary"
                      src={mail_svg}
                      alt="back"
                    />
                    <span className="view-box-contact-text">
                      {item.email.join(" / ")}
                    </span>
                  </div>
                  <div className="view-box-contact-aside">
                    <img
                      className="view-box-contact-secondary"
                      src={phone_svg}
                      alt="back"
                    />
                    <span className="view-box-contact-text">
                      {item.phone.join(" / ")}
                    </span>
                  </div>
                </div>
              );
            })}
          {isEdit === 1 && (
            <button
              onClick={() => updateContactList(contacts)}
              className="btn-save"
            >
              Save
            </button>
          )}

          {!isEdit && (
            <UpdateContact
              editItem={editItem}
              contacts={contacts}
              updateContactList={updateContactList}
            />
          )}
        </div>
      )}
    </>
  );
};

export default EditContact;
