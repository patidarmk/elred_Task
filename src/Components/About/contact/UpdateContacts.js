import "./UpdateContacts.css";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import { useState } from "react";

const UpdateContact = ({ editItem, contacts, updateContactList }) => {
  const [values, setValues] = useState(() => {
    return contacts.find((item) => item.id === editItem);
  });

  const [inputList, setInputList] = useState([]);
  const [inputListPhone, setInputListPhone] = useState([]);

  const [emails, setEmails] = useState(values.email);
  const [phones, setPhones] = useState(values.phone);

  const savaContactHandler = () => {
    const index = contacts.findIndex((contact) => contact.id === editItem);
    contacts[index].email = emails;
    contacts[index].phone = phones;
    updateContactList(contacts);
    setInputListPhone([]);
    setInputList([]);
  };

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  const onAddPhoneBtnClick = (event) => {
    setInputListPhone(
      inputListPhone.concat(<InputPhone key={inputListPhone.length} />)
    );
  };

  const Input = () => {
    let email = "";
    let index = emails.length + 1;
    return (
      <EmailInput
        emails={emails}
        setEmails={setEmails}
        key={index}
        email={email}
        index={index}
      />
    );
  };

  const InputPhone = () => {
    let phone = "";
    let index = emails.length + 1;
    return (
      <PhoneInput
        phones={phones}
        setPhones={setPhones}
        key={index}
        phone={phone}
        index={index}
      />
    );
  };

  return (
    <div className="contact-edit-form-container">
      <div className="contact-edit-form">
        <span>Email ID</span>
        {values.email.map((email, index) => {
          return (
            <>
              {email && (
                <EmailInput
                  emails={emails}
                  setEmails={setEmails}
                  key={index}
                  email={email}
                  index={index}
                />
              )}
            </>
          );
        })}
        {inputList}
        <button className="contact-edit-form-btn" onClick={onAddBtnClick}>
          Add input
        </button>
      </div>
      <div className="contact-edit-form">
        <span>Contact no</span>
        {values.phone.map((phone, index) => {
          return (
            <PhoneInput
              phones={phones}
              setPhones={setPhones}
              key={index}
              phone={phone}
              index={index}
            />
          );
        })}
        {inputListPhone}
        <button className="contact-edit-form-btn" onClick={onAddPhoneBtnClick}>
          Add input
        </button>
      </div>
      <button onClick={savaContactHandler} className="btn-save save">
        Save
      </button>
    </div>
  );
};
export default UpdateContact;
