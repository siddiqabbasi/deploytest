import { useState, useEffect } from "react";
import AuthUser from "./AuthUser";
import Verification from './Verification';
import logo from '../assets/centerLogo.jpg';

export default function Home() {
  const { http, setToken } = AuthUser();
  const [complainant_name, setComplainantName] = useState(null);
  const [complainant_mobile_no, setComplainantMobileNo] = useState(null);
  const [crime_type, setCrimeType] = useState("mobile");
  const [imei_no, setIMEINo] = useState(null);
  const [registration_no, setRegistrationNo] = useState(null);
  const [engine_no, setEngineNo] = useState(null);
  const [chasis_no, setChasisNo] = useState(null);
  const [isError, setError] = useState(false);

  const initialSettings = () => {
    setComplainantName('');
    setComplainantMobileNo('');
    setCrimeType("mobile");
    setIMEINo('');
    setRegistrationNo('');
    setEngineNo('');
    setChasisNo('');
    setError(false)
  }
  //   const [password, setPassword] = useState();

  useEffect(() => {
    // fetchAllUsers();
    // initialSettings();
  });

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      // console.log(res.data)
    });
  };

  const submitForm = () => {
    console.log(
      complainant_name,
      complainant_mobile_no,
      crime_type,
      imei_no,
      registration_no,
      engine_no,
      chasis_no
    );
    // console.log(moment().format())

    const userData = complainant_name && complainant_mobile_no,
      mobileData = crime_type == "mobile" && imei_no,
      vehicleData =
        crime_type == "vehicle" && registration_no && engine_no && chasis_no;
    if ((userData && mobileData) || (userData && vehicleData)) {
      let formData = new FormData();
      formData.append("complainant_name", complainant_name);
      formData.append("complainant_mobile_no", complainant_mobile_no);
      formData.append("offence_date", null);
      formData.append("offence_month", null);
      formData.append("offence_year", null);
      formData.append("complain_date", null);
      formData.append("complain_month", null);
      formData.append("crime_type", crime_type);
      formData.append("imei_no", imei_no);
      formData.append("make", null);
      formData.append("model", null);
      formData.append("color", null);
      formData.append("registration_no", registration_no);
      formData.append("engine_no", engine_no);
      formData.append("chasis_no", chasis_no);
      formData.append("police_station", null);
      formData.append("district", null);
      formData.append("location", null);
      formData.append("incident_date", null);
      formData.append("incident_time", null);
      formData.append("status_crime_type", null);
      formData.append("fir_no", null);
      formData.append("date_of_fir", null);
      formData.append("crime_status", null);
      formData.append("file_path", null);
      formData.append("user_id", null);
      // formData.append("created_at", moment().format());

      console.log("formData", [...formData]);
      // api call
      http
        .post("/addcomplain", formData)
        .then((res) => {
          console.log(res.data);
          alert('Your complain has beed registered, suppot person will call you in 24 hours')
          initialSettings();
          // setToken(res.data.user,res.data.access_token);
        })
        .catch((err) => {
          console.log(err, "dsafa");
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-4">
        <div className="card p-4">
          <h4 className="text-center mb-3">Register your Complain here </h4>
          <div className="form-group">
            <label>Complainant Name:</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter your name here"
              onChange={(e) => {
                setComplainantName(e.target.value);
                setError(false);
              }}
              value={complainant_name}
              id="complainant_name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Complainant Mobile No.:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter you mobile number here"
              onChange={(e) => {
                setComplainantMobileNo(e.target.value);
                setError(false);
              }}
              value={complainant_mobile_no}
              id="complainant_mobile_no"
            />
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px" }}
          >
            {/* <div
              className="col-sm-5 border border-dark rounded"
              onClick={() => {
                setIMEINo(null);
                setCrimeType("vehicle");
              }}
            >
              <h5>Vehicle</h5>
            </div>
            <div
              className="col-sm-5 border border-dark rounded"
              onClick={() => {
                setRegistrationNo(null);
                setEngineNo(null);
                setChasisNo(null);
                setCrimeType("mobile");
              }}
            >
              <h5>Mobile</h5>
            </div> */}

            <button
              type="button" class="btn btn-primary col-sm-4"
              onClick={() => {
                setIMEINo(null);
                setCrimeType("vehicle");
              }}
            >Vehicle</button>
            <div class="col-sm-2"></div>
            <button
              type="button"
              class="btn btn-primary col-sm-4"
              onClick={() => {
                setRegistrationNo(null);
                setEngineNo(null);
                setChasisNo(null);
                setCrimeType("mobile");
              }}
            >Mobile</button>
          </div>
          {crime_type == "mobile" ? (
            <div className="form-group mt-3">
              <label>IMEI No.:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter you IMEI number here"
                onChange={(e) => {
                  setIMEINo(e.target.value);
                  setError(false);
                }}
                value={imei_no}
                id="imei_no"
              />
            </div>
          ) : null}
          {crime_type == "vehicle" ? (
            <div className="form-group mt-3">
              <label>Registration No.:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter you mobile Registration here"
                onChange={(e) => {
                  setRegistrationNo(e.target.value);
                  setError(false);
                }}
                value={registration_no}
                id="registration_no"
              />
            </div>
          ) : null}
          {crime_type == "vehicle" ? (
            <div className="form-group mt-3">
              <label>Engine No.:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter you Engine number here"
                onChange={(e) => {
                  setEngineNo(e.target.value);
                  setError(false);
                }}
                value={engine_no}
                id="engine_no"
              />
            </div>
          ) : null}
          {crime_type == "vehicle" ? (
            <div className="form-group mt-3">
              <label>Chasis No.:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter you Chasis number here"
                onChange={(e) => {
                  setChasisNo(e.target.value);
                  setError(false);
                }}
                value={chasis_no}
                id="chasis_no"
              />
            </div>
          ) : null}
          {isError ? (
            <p
              style={{ alignSelf: "center", margin: "0px", marginTop: "10px" }}
            >
              All fields are required
            </p>
          ) : null}
          <button
            type="button"
            onClick={submitForm}
            className="btn btn-primary mt-4"
          >
            Register
          </button>
        </div>
      </div>
      <div className="col-sm-4">
        <img src={logo} alt="logo" style={{ height: '350px' }} />
      </div>
      <Verification />
    </div>
  );
}
