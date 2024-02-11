import React from "react";
import { Link } from "react-router-dom";
import user from "../img/user.png";
function Common() {
  return (
   
      <div className="menu">
        <table className="menu-container" border="0">
          <tbody>
            <tr>
              <td style={{ padding: "15px" }} colSpan="2">
                <table border="0" className="profile-container">
                  <tbody>
                    <tr>
                      <td width="30%" style={{ paddingLeft: "20px" }}>
                        <img
                          src={user}
                          alt=""
                          width="100%"
                          style={{ borderRadius: "50%" }}
                        />
                      </td>
                      <td style={{ padding: "0px", margin: "0px" }}>
                        <p className="profile-title">Administrator</p>
                        <p className="profile-subtitle">admin@edoc.com</p>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <a href="../logout.php">
                          <input
                            type="button"
                            value="Log out"
                            className="logout-btn btn-primary-soft btn"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="menu-row">
              <td className="menu-btn menu-icon-dashbord menu-active menu-icon-dashbord-active">
                <Link to={"/"}
                  href=""
                  className="non-style-link-menu non-style-link-menu-active"
                ></Link>
                <div>
                  <Link to={"/"}
                    
                    className="non-style-link-menu non-style-link-menu-active"
                  >
                    <p className="menu-text">Dashboard</p>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="menu-row">
              <td className="menu-btn menu-icon-doctor ">
                <a href="doctors.php" className="non-style-link-menu "></a>
                <div>
                  <Link to="/doctor" className="non-style-link-menu ">
                    <p className="menu-text">Doctors</p>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="menu-row">
              <td className="menu-btn menu-icon-schedule">
                <Link to="/schedule" className="non-style-link-menu">
                  <div>
                    <p className="menu-text">Schedule</p>
                  </div>
                </Link>
              </td>
            </tr>
            <tr className="menu-row">
              <td className="menu-btn menu-icon-appoinment">
                <Link to={"/appointment"} className="non-style-link-menu"></Link>
                <div>
                  <Link to={"/appointment"} className="non-style-link-menu">
                    <p className="menu-text">Appointment</p>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="menu-row">
              <td className="menu-btn menu-icon-patient">
                <a href="patient.php" className="non-style-link-menu"></a>
                <div>
                  <a href="patient.php" className="non-style-link-menu">
                    <p className="menu-text">Patients</p>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    
  );
}

export default Common;
