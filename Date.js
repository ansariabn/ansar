import React from "react";
import cal from "../img/calendar.svg";
import "../css/main.css";
import "../css/admin.css";

function Date() {
  const moment = require("moment");

  let now = moment();
  return (
    <>
      
    
      {/* <td width="25%"></td> */}

      <td width="15%">
        <p
          style={{
            fontSize: "14px",
            color: "rgb(119, 119, 119)",
            padding: 0,
            margin: 0,
            textAlign: "right",
          }}
        >
          Today's Date
        </p>
        <p className="heading-sub12" style={{ padding: 0, margin: 0 }}>
          {now.format("YYYY-MM-DD")}
        </p>
      </td>
      <td width="10%">
        <button
          className="btn-label"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={cal} width="100%" />
        </button>
      </td>
      </>
  );
}

export default Date;
