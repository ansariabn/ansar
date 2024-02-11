import React from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../img/user.png";
import Login from "../basePage/Login";
import Profile from "../doctor/Profile";
import { useState } from "react";
// import "./myc.css"
// import
// import "./patient.css";
function Side() {


  const use = [
    {
      id: 1,
      link: "/desh",
      name: "Deshboard",
      classN: "menu-btn menu-icon-dashbord",
      anchor: "a",
    },
    {
      id: 2,
      link: "/doctor",
      name: "Doctors",
      classN: "menu-btn menu-icon-doctor  ",
      anchor: "a",
    },
    {
      id: 3,
      link: "/schedule",
      name: "Schedule",
      classN: "menu-btn menu-icon-schedule",
      anchor: "a",

    },
    {
      id: 4,
      link: "/appointment",
      name: "Appointment",
      classN: "menu-btn menu-icon-appoinment",
      anchor: "a",

    },
    {
      id: 5,
      link: "/patient",
      name: "Patients",
      classN: "menu-btn menu-icon-patient",
      anchor: "a",

    },
  ];

 



  const navigate = useNavigate()
  // const onclick = (e) => {
  //   navigate('/login');
  //   console.log("Navigate")
  // }
  // const [bgClr, setBgClr] = useState("black");

  // const AnnualHandler = () => {
  //   setBgClr("yellow");
    
  // };
  return (
    <div className="menu">
      <table className="menu-container" border="0">
        <tbody>
          {/* <tr>
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
                      
                      
                        <input
                          type="button"
                          value="Log out"
                          onClick={(e) => onclick(e)}
                          className="logout-btn btn-primary-soft btn"
                        />
                      
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr> */}
          <Profile/>
          
          {use.map(
            (items, index) => (
            //   console.log(items),
              
                <tr className="menu-row" key={index}>
                  <td className = {items.classN}>
                 
                      <Link
                        to={items.link}
                        className={`items.anchor ${items.id }`}
                        // onClick={`AnnualHandler ${console.log(AnnualHandler)}`}
                        // style={{ backgroundColor: {bgClr}}}
                        // onClick={`items.name ${console.log(items.name)}`}
                        
                      >
                        <p className="menu-text"  >{items.name}</p>
                      </Link>
                      
                  </td>
                </tr>
              
            )
          )}
          
        </tbody>
      </table>
    </div>
  );
}

export default Side;
