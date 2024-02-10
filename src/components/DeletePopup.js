import React from "react";
import "../App.css"
const Popup = ({ customerID, onClose,DeleteUserDB }) => {
  if (!customerID) return null;
  return (
    <>
    <div className="blurbox"></div>
    <div className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <p>Do you want to delete the customer {customerID}?</p>
          </div>
          <div className="btnContainer">
            <button
              className="btnPrimary delbtn"
              onClick={() => DeleteUserDB(customerID)}
            >
              YES
            </button>
            <button className="btnOutline savebtn" onClick={onClose}>
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Popup;