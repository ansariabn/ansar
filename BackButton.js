import React from "react";

function BackButton() {
  return (
    <>
      <td width="13%">
        <a href="appointment.php">
          <button
            className="login-btn btn-primary-soft btn btn-icon-back"
            style={{paddingTop:"11px",paddingBottom:"11px",marginLeft:"20px",width:"125px"}}
          >
            <font className="tn-in-text">Back</font>
          </button>
        </a>
      </td>
    </>
  );
}

export default BackButton;
