import React from "react";
import Date from "./Date";
import BackButton from "./BackButton";
import Search2 from "./Search2";
import { useEffect } from "react";
function Sside() {
  useEffect(() => {
    document.title = "Schedule";
  
  }, [])
  return (
    <div class="dash-body" style={{ marginTop: "15px" }}>
      <table border="0" width="100%">
        <tbody>
          <tr>
            <BackButton />
            <td width="13">
              <p
                style={{
                  fontSize: "20px",
                  padding: 0,
                  fontWeight: "600",
                  marginLeft: 0,
                  textAlign: "center"
                }}
              >
                Shedule Manager
              </p>
            </td>
            <Date />
          </tr>

          <tr>
            <td colspan="4">
              <div style={{ display: "flex", marginTop: "40px" }}>
                <div
                  class="heading-main12"
                  style={{
                    marginLeft: "45px",
                    fontSize: "20px",
                    color: "rgb(49, 49, 49)",
                    marginTop: "5px",
                  }}
                >
                  Schedule a Session
                </div>
                <a
                  href="?action=add-session&amp;id=none&amp;error=0"
                  class="non-style-link"
                >
                  <button
                    class="login-btn btn-primary btn button-icon"
                    style={{
                      marginLeft: "25px",
                      backgroundImage: "url('../img/icons/add.svg')",
                    }}
                  >
                    Add a Session
                  </button>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="4" style={{ paddingTop: "10px", width: "100%" }}>
              <p
                class="heading-main12"
                style={{
                  marginLeft: "45px",
                  fontSize: "18px",
                  color: "rgb(49, 49, 49)",
                }}
              >
                All Sessions (6)
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="4" style={{ paddingTop: "0px", width: "100%" }}>
              <center>
                <table class="filter-container" border="0">
                  <tbody>
                    <tr>
                      <td width="10%"></td>
                      <td width="5%" style={{ textAlign: "center" }}>
                        Date:
                      </td>
                      <td width="30%">
                        <form action="" method="post">
                          <input
                            type="date"
                            name="sheduledate"
                            id="date"
                            class="input-text filter-container-items"
                            style={{ margin: 0, width: "95%" }}
                          />
                        </form>
                      </td>
                      <td width="5%" style={{ textAlign: "center" }}>
                        Doctor:
                      </td>
                      <td width="30%">
                        <select
                          name="docid"
                          id=""
                          class="box filter-container-items"
                          style={{ width: "90%", height: "37px", margin: 0 }}
                        >
                          <option value="" disabled="" selected="" hidden="">
                            Choose Doctor Name from the list
                          </option>
                        </select>
                      </td>
                      <td width="12%">
                        <input
                          type="submit"
                          name="filter"
                          value=" Filter"
                          class=" btn-primary-soft btn button-icon btn-filter"
                          style={{ padding: "15px", margin: 0, width: "100%" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </td>
          </tr>

          <tr>
            <td colspan="4">
              <center>
                <div class="abc scroll">
                  <table width="93%" class="sub-table scrolldown" border="0">
                    <thead>
                      <tr>
                        <th class="table-headin">Session Title</th>

                        <th class="table-headin">Doctor</th>
                        <th class="table-headin">Sheduled Date &amp; Time</th>
                        <th class="table-headin">Max num that can be booked</th>

                        <th class="table-headin">Events</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="4">
                          <br />
                          <br />
                          <br />
                          <br />
                          <center>
                            <img src="../img/notfound.svg" width="25%" />

                            <br />
                            <p
                              class="heading-main12"
                              style={{
                                marginLeft: "45px",
                                fontSize: "20px",
                                color: "rgb(49, 49, 49)",
                              }}
                            >
                              We couldnt find anything related to your keywords
                              !
                            </p>
                            <a class="non-style-link" href="schedule.php">
                              <button
                                class="login-btn btn-primary-soft btn"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginLeft: "20px",
                                }}
                              >
                                &nbsp; Show all Sessions &nbsp;
                              </button>
                            </a>
                          </center>
                          <br />
                          <br />
                          <br />
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Sside;
