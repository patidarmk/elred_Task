import edit from "../../../assets/edit.svg";
import address_svg from "../../../assets/address.svg";

import "./Address.css";
const Address = () => {
  const AddressList = [
    {
      id: 1,
      address:
        "C-1 / 351 / 4, GIDC Makarpura, Vadodara – 390010, Gujarat, India",
    },
  ];

  return (
    <div className="address">
      <div className="address-heading-container">
        <div className="address-heading">
          <img className="address-item-svg" src={address_svg} alt="svg" />
          <span className="address-heading-title">Address</span>
        </div>
        <img className="address-item-svg-edit" src={edit} alt="svg" />
      </div>
      <div className="address-item">
        <span className="address-item-text">{AddressList[0].address}</span>
      </div>
    </div>
  );
};

export default Address;
