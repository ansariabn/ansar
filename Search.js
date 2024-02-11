import React from "react";
import "../css/main.css";


function Search(prop) {
  return (
    
    <form action="schedule.php" method="post" style={{ display: "flex" }}>
      <input
        type="search"
        name="search"
        className="input-text "
        placeholder="Search Doctor and We will Find The Session Available"
        list="doctors"
        style={{ width: "45%" }}
      />
      &nbsp;&nbsp;
      <datalist id="doctors">
        <option value="Test Doctor">
          <br />
        </option>
      </datalist>
      <input
        type="Submit"
        value="Search"
        className="login-btn btn-primary btn"
        style={{
          paddingLeft: "25px",
          paddingRight: "25px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      />
      <br />
      <br />
    </form>
  );
}

export default Search;
