import React from "react";
import "../css/main.css";
import { Link } from "react-router-dom";
import "../css/allnimation.css";
function AddNewD({onClose}) {
  return (
    <div id="popup1" class="overlay">
      <div class="popup">
        <center>
          <Link class="close" onClick={onClose} >
            ×
          </Link>
          <div style={{display:"flex",justifyContent:"center"}}>
            <div class="abc">
              <table
                width="80%"
                class="sub-table scrolldown add-doc-form-container"
                border="0"
              >
                <tbody>
                  <tr>
                    <td class="label-td" colspan="2"></td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{padding:0,margin:0,textAlign:"left",fontSize:"25px",fontWeight:"500"}}>
                        Add New Doctor.
                      </p>
                      <br />
                      <br />
                    </td>
                  </tr>

                  <tr>
                    <form
                      action="add-new.php"
                      method="POST"
                      class="add-new-form"
                    ></form>
                    <td class="label-td" colspan="2">
                      <label for="name" class="form-label">
                        Name:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <input
                        type="text"
                        name="name"
                        class="input-text"
                        placeholder="Doctor Name"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <label for="Email" class="form-label">
                        Email:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <input
                        type="email"
                        name="email"
                        class="input-text"
                        placeholder="Email Address"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <label for="nic" class="form-label">
                        NIC:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <input
                        type="text"
                        name="nic"
                        class="input-text"
                        placeholder="NIC Number"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <label for="Tele" class="form-label">
                        Telephone:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <input
                        type="tel"
                        name="Tele"
                        class="input-text"
                        placeholder="Telephone Number"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <label for="spec" class="form-label">
                        Choose specialties:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <select name="spec" id="" class="box">
                        <option value="1">
                          Accident and emergency medicine
                        </option>
                        <option value="2">Allergology</option>
                        <option value="3">Anaesthetics</option>
                        <option value="4">Biological hematology</option>
                        <option value="5">Cardiology</option>
                        <option value="6">Child psychiatry</option>
                        <option value="7">Clinical biology</option>
                        <option value="8">Clinical chemistry</option>
                        <option value="9">Clinical neurophysiology</option>
                        <option value="10">Clinical radiology</option>
                        <option value="11">
                          Dental, oral and maxillo-facial surgery
                        </option>
                        <option value="12">Dermato-venerology</option>
                        <option value="13">Dermatology</option>
                        <option value="14">Endocrinology</option>
                        <option value="15">Gastro-enterologic surgery</option>
                        <option value="16">Gastroenterology</option>
                        <option value="17">General hematology</option>
                        <option value="18">General Practice</option>
                        <option value="19">General surgery</option>
                        <option value="20">Geriatrics</option>
                        <option value="21">Immunology</option>
                        <option value="22">Infectious diseases</option>
                        <option value="23">Internal medicine</option>
                        <option value="24">Laboratory medicine</option>
                        <option value="25">Maxillo-facial surgery</option>
                        <option value="26">Microbiology</option>
                        <option value="27">Nephrology</option>
                        <option value="28">Neuro-psychiatry</option>
                        <option value="29">Neurology</option>
                        <option value="30">Neurosurgery</option>
                        <option value="31">Nuclear medicine</option>
                        <option value="32">Obstetrics and gynecology</option>
                        <option value="33">Occupational medicine</option>
                        <option value="34">Ophthalmology</option>
                        <option value="35">Orthopaedics</option>
                        <option value="36">Otorhinolaryngology</option>
                        <option value="37">Paediatric surgery</option>
                        <option value="38">Paediatrics</option>
                        <option value="39">Pathology</option>
                        <option value="40">Pharmacology</option>
                        <option value="41">
                          Physical medicine and rehabilitation
                        </option>
                        <option value="42">Plastic surgery</option>
                        <option value="43">Podiatric Medicine</option>
                        <option value="44">Podiatric Surgery</option>
                        <option value="45">Psychiatry</option>
                        <option value="46">
                          Public health and Preventive Medicine
                        </option>
                        <option value="47">Radiology</option>
                        <option value="48">Radiotherapy</option>
                        <option value="49">Respiratory medicine</option>
                        <option value="50">Rheumatology</option>
                        <option value="51">Stomatology</option>
                        <option value="52">Thoracic surgery</option>
                        <option value="53">Tropical medicine</option>
                        <option value="54">Urology</option>
                        <option value="55">Vascular surgery</option>
                        <option value="56">Venereology</option>{" "}
                      </select>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <label for="password" class="form-label">
                        Password:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <input
                        type="password"
                        name="password"
                        class="input-text"
                        placeholder="Defind a Password"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <label for="cpassword" class="form-label">
                        Conform Password:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td class="label-td" colspan="2">
                      <input
                        type="password"
                        name="cpassword"
                        class="input-text"
                        placeholder="Conform Password"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <input
                        type="reset"
                        value="Reset"
                        class="login-btn btn-primary-soft btn"
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="submit"
                        value="Add"
                        class="login-btn btn-primary btn"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </center>
        <br />
        <br />
      </div>
    </div>
  );
}

export default AddNewD;
