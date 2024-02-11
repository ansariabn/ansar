import React from "react";

function Search2() {
    
  return (
    <form action="" method="post" class="header-search">
      <input
        type="search"
        name="search"
        class="input-text header-searchbar"
        placeholder="Search Doctor name or Email"
        list="doctors"
      />
      &nbsp;&nbsp;
      <datalist id="doctors">
        <option value="Test Doctor">
          <br />
        </option>
        <option value="doctor@edoc.com">
          <br />{" "}
        </option>
      </datalist>
      <input
        type="Submit"
        value="Search"
        class="login-btn btn-primary btn"
        style={{
          paddingLeft: "25px",
          paddingRight: " 25px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      />
    </form>
  );
}

export default Search2;
