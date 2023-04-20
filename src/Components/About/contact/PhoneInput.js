import { useState } from "react";

const PhoneInput = ({ phones, setPhones, phone, index }) => {
  const [uniquePhone, setUniquePhone] = useState(phone);

  const handleChange = (event, index) => {
    setUniquePhone(event.target.value);
    const newPhones = [...phones];
    newPhones[index] = event.target.value;
    const newPhonesFiltered = newPhones.filter((element) => element !== null);
    setPhones(newPhonesFiltered);
  };

  return (
    <input
      className="input-email"
      name="email"
      id={index}
      onChange={(event) => handleChange(event, index)}
      type="email"
      placeholder="eg : 9192939495"
      value={uniquePhone}
    />
  );
};

export default PhoneInput;
