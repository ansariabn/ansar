import logo from "./logo.svg";
import "./Base.css";
import Admin from "./Aside/Admin";
import Doctor from "./doctor/Doctor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddNewD from './admin/AddNewD';
// import SideBar from './admin/SideBar';
import Schedule from "./admin/Schedule";
import ApoinSide from "./ApoinSide/ApoinSide";
// import Side from './admin/Side';
// import Pside from './Admindesh/patient/Pside';
import Pside from "./patient/Pside";
import Login from "./basePage/Login";
import BasePage from "./basePage/BasePage";

import Sign from "./basePage/Sign";
import SignupNext from "./basePage/SignupNext";
import DoctorsDesh from "./Pdoctor.js/DoctorsDesh";
import MyApp from "./Pdoctor.js/MyApp";
import MyPatients from "./Pdoctor.js/MyPatients";
import Settings from "./Pdoctor.js/Settings";
import MySession from "./Pdoctor.js/MySession";
import DeshBoard from "./Pdoctor.js/DeshBoard";
import PatientsHome from "./PatientDeshboard/PatientsHome";
import AllDoctor from "./PatientDeshboard/AllDoctor";
import MyBookings from "./PatientDeshboard/MyBookings";
import PSettings from "./PatientDeshboard/PSettings";
// import "./css/patient.css";
function App() {
  // const use = [
  //   {
  //     id: 1,
  //     link: "/desh",
  //     name: "Deshboard",
  //     classN: "menu-btn menu-icon-dashbord ",
  //     anchor: "a",
  //   },
  //   {
  //     id: 2,
  //     link: "/doctor",
  //     name: "Doctors",
  //     classN: "menu-btn menu-icon-doctor  ",
  //     anchor: "a",
  //   },
  //   {
  //     id: 3,
  //     link: "/schedule",
  //     name: "Schedule",
  //     classN: "menu-btn menu-icon-schedule",
  //     anchor: "a",

  //   },
  //   {
  //     id: 4,
  //     link: "/appointment",
  //     name: "Appointment",
  //     classN: "menu-btn menu-icon-appoinment",
  //     anchor: "a",

  //   },
  //   {
  //     id: 5,
  //     link: "/patient",
  //     name: "Patients",
  //     classN: "menu-btn menu-icon-patient",
  //     anchor: "a",

  //   },
  // ];

  // const routeComponents = use.map(({ name, link }) => (
  //   <Route key={name} path={link} />
  // ));

  return (
    // <div className="App">
    //Admin DeshBoard
    <Router>
      <Routes>
        <Route path={"/"} index element={<BasePage />} />
        <Route path={"login"} element={<Login />} />
          <Route path={"signNext"} element={<SignupNext />} />
          <Route exact path={"sign"} element={<Sign />} />

          
      </Routes>
      <div className="base-container">
        <Routes>
          <Route path={"desh"} element={<Admin />} />
          <Route path={"doctor"} element={<Doctor />} />
          <Route path={"schedule"} element={<Schedule />} />
          <Route  path={"appointment"} element={<ApoinSide />} />
          <Route  path={"patient"} element={<Pside />} />
        </Routes>
      </div>
    
    {/* Doctor DeshBoard */}
    
      <Routes>
      <Route path={"doctor"} element={<DoctorsDesh />} />
      <Route path={"myappointment"} element={<MyApp />} />
      <Route path={"mypatient"} element={<MyPatients />} />
      <Route path={"mysession"} element={<MySession/>} />
      <Route path={"setting"} element={<Settings/>} />
      </Routes>
    




      {/* patients DeshBoard  */}
    
      <Routes>
      <Route path={"patientHome"} element={<PatientsHome/>} />
      <Route path={"all-doctor"} element={<AllDoctor/>} />
      <Route path={"mybooking"} element={<MyBookings/>} />
      <Route path={"settings"} element={<PSettings/>} />
      </Routes>
    </Router>

  );
}

export default App;
