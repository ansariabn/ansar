import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
function Example() {
  let use = [
    {
      id: 1,
      link: "/desh",
      name: "Deshboard",
    },
    {
      id: 2,
      link: "/doctor",
      name: "Doctors",
    },
    {
      id: 3,
      link: "/schedule",
      name: "Schedule",
    },
    {
      id: 4,
      link: "/appointment",
      name: "AppointmentS",
    },
    {
      id: 5,
      link: "/patient",
      name: "Patients",
    },
  ];
  return (
    <>
      <table>
        {use.map((items, index) => (
          <tr className="menu-row" key={index}>
            <td className="menu-btn menu-icon-dashbord menu-active menu-icon-dashbord-active">
              <Link
                to={items.link}
                className="non-style-link-menu non-style-link-menu-active"
              ></Link>
              <div>
                <Link
                  to={items.link}
                  className="non-style-link-menu non-style-link-menu-active"
                >
                  <p className="menu-text">{items.name}</p>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Example;
