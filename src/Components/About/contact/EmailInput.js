import { useState } from "react";

const EmailInput = ({ emails, setEmails, email, index }) => {
  const [uniqueEmail, setUniqueEmail] = useState(email);

  const handleChange = (event, index) => {
   
      setUniqueEmail(event.target.value)
      const newEmails = [...emails];
      newEmails[index] = event.target.value;
      const newEmailsFiltered = newEmails.filter(element => element !== null);
      setEmails(newEmailsFiltered);
  };

  return (
    <input
      className="input-email"
      name="email"
      id={index}
      onChange={(event) => handleChange(event, index)}
      type="email"
      placeholder="eg : salesteam@br.in"
      value={uniqueEmail}
    />
  );
};

export default EmailInput;
