import { useEffect, useState, useRef } from "react";
import AuthUser from "./AuthUser";
import { useLocation, useNavigate  } from "react-router-dom";

export default function UpdateComplain() {
  const navigate = useNavigate();
  const stateParams = useLocation();
  const { http, user } = AuthUser();
  const [complain_id, setComplainId] = useState(null);
  const [complainant_name, setComplainantName] = useState(null);
  const [complainant_mobile_no, setComplainantMobileNo] = useState(null);
  const [crime_type, setCrimeType] = useState("mobile");
  const [imei_no, setIMEINo] = useState(null);
  const [registration_no, setRegistrationNo] = useState(null);
  const [engine_no, setEngineNo] = useState(null);
  const [chasis_no, setChasisNo] = useState(null);
  const [offence_date, setOffenceDate] = useState(null);
  const [complain_date, setComplaindate] = useState(null);
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [color, setColor] = useState(null);
  const [police_station, setPoliceStation] = useState(null);
  const [district, setDistrict] = useState(null);
  const [location, setLocation] = useState(null);
  const [incident_date, setIncidentDate] = useState(null);
  const [status_crime_type, setStatusCrimeType] = useState(null);
  const [fir_no, setFIRno] = useState(null);
  const [date_of_fir, setDateOfFir] = useState(null);
  const [crime_status, setCrimeStatus] = useState(null);
  const [user_id, setUserId] = useState(null);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = () => {
    console.log("navigation", stateParams);
    setComplainId(stateParams.state.id);
    setComplainantName(stateParams.state.complainant_name);
    setComplainantMobileNo(stateParams.state.complainant_mobile_no);
    setIMEINo(stateParams.state.imei_no);
    setRegistrationNo(stateParams.state.registration_no);
    setEngineNo(stateParams.state.engine_no);
    setCrimeType(stateParams.state.crime_type);
    setChasisNo(stateParams.state.chasis_no);
    setOffenceDate(stateParams.state.offence_date);
    setComplaindate(stateParams.state.complain_date);
    setMake(stateParams.state.make);
    setModel(stateParams.state.model);
    setColor(stateParams.state.color);
    setPoliceStation(stateParams.state.police_station);
    setDistrict(stateParams.state.district);
    setLocation(stateParams.state.location);
    setIncidentDate(stateParams.state.incident_date);
    setStatusCrimeType(stateParams.state.status_crime_type);
    setFIRno(stateParams.state.fir_no);
    setDateOfFir(stateParams.state.date_of_fir);
    setCrimeStatus(stateParams.state.crime_status);
    // setComplainantName(stateParams.state.complainant_name);
  };

  const submitForm = () => {
    console.log(
      complainant_name,
      complainant_mobile_no,
      crime_type,
      imei_no,
      registration_no,
      engine_no,
      chasis_no,
      offence_date,
      complain_date,
      make,
      model,
      color,
      police_station,
      district,
      location,
      incident_date,
      status_crime_type,
      fir_no,
      date_of_fir,
      crime_status,
      user_id
    );
    let formData = new FormData();
    formData.append("id", complain_id);
    formData.append("complainant_name", complainant_name);
    formData.append("complainant_mobile_no", complainant_mobile_no);
    formData.append("offence_date", offence_date);
    formData.append("offence_month", null);
    formData.append("offence_year", null);
    formData.append("complain_date", complain_date);
    formData.append("complain_month", null);
    formData.append("crime_type", crime_type);
    formData.append("imei_no", imei_no);
    formData.append("make", make);
    formData.append("model", model);
    formData.append("color", color);
    formData.append("registration_no", registration_no);
    formData.append("engine_no", engine_no);
    formData.append("chasis_no", chasis_no);
    formData.append("police_station", police_station);
    formData.append("district", district);
    formData.append("location", location);
    formData.append("incident_date", incident_date);
    formData.append("incident_time", null);
    formData.append("status_crime_type", status_crime_type);
    formData.append("fir_no", fir_no);
    formData.append("date_of_fir", date_of_fir);
    formData.append("crime_status", crime_status);
    formData.append("file_path", null);
    formData.append("user_id", user.id);
    // formData.append("updated_at", moment().format())

    console.log("formData", [...formData]);
    // api call
    http
      .post("/updateComplain", formData)
      .then((res) => {
        console.log(res.data);
        navigate(-1)
        // stateParams.callBack();
        // setToken(res.data.user,res.data.access_token);
      })
      .catch((err) => {
        console.log(err, "dsafa");
      });
  };

  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          {/* {<h1 className="text-center mb-3">Register your Complain here </h1>} */}
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
                type="number"
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
                type="number"
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
          {/* <div className="form-group">
            <label>Offence Date:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Offence Date"
              onChange={(e) => {
                setOffenceDate(e.target.value);
                setError(false);
              }}
              value={offence_date}
              id="offence_date"
            />
          </div> */}
          <div className="form-group mt-3">
            <label>Complain Date:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Complain Date"
              onChange={(e) => {
                setComplaindate(e.target.value);
                setError(false);
              }}
              value={complain_date}
              id="complain_date"
            />
          </div>
          <div className="form-group mt-3">
            <label>Make:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Make"
              onChange={(e) => {
                setMake(e.target.value);
                setError(false);
              }}
              value={make}
              id="make"
            />
          </div>
          <div className="form-group mt-3">
            <label>Model:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Model"
              onChange={(e) => {
                setModel(e.target.value);
                setError(false);
              }}
              value={model}
              id="model"
            />
          </div>
          <div className="form-group mt-3">
            <label>Color:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Color"
              onChange={(e) => {
                setColor(e.target.value);
                setError(false);
              }}
              value={color}
              id="color"
            />
          </div>
          <div className="form-group mt-3">
            <label>Police Station:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Police Station"
              onChange={(e) => {
                setPoliceStation(e.target.value);
                setError(false);
              }}
              value={police_station}
              id="police_station"
            />
          </div>
          <div className="form-group mt-3">
            <label>District:</label>
            <input
              type="text"
              className="form-control"
              placeholder="District"
              onChange={(e) => {
                setDistrict(e.target.value);
                setError(false);
              }}
              value={district}
              id="district"
            />
          </div>
          <div className="form-group mt-3">
            <label>Location:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              onChange={(e) => {
                setLocation(e.target.value);
                setError(false);
              }}
              value={location}
              id="location"
            />
          </div>
          <div className="form-group mt-3">
            <label>Incident Date:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Incident Date"
              onChange={(e) => {
                setIncidentDate(e.target.value);
                setError(false);
              }}
              value={incident_date}
              id="incident_date"
            />
          </div>
          <div className="form-group mt-3">
            <label>Status Crime Type:</label>
            <select 
            class="form-control" 
            id="status_crime_type"
            value={status_crime_type}
            onChange={(e) => {setStatusCrimeType(e.target.value)}}
            >
              {["", "RECOVERED", "NOT RECOVERED"].map((status) => (
                <option>{status}</option>
              ))}
            </select>
          </div>
          <div className="form-group mt-3">
            <label>FIR No.:</label>
            <input
              type="text"
              className="form-control"
              placeholder="FIR No."
              onChange={(e) => {
                setFIRno(e.target.value);
                setError(false);
              }}
              value={fir_no}
              id="fir_no"
            />
          </div>
          <div className="form-group mt-3">
            <label>Date of FIR:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Date of FIR"
              onChange={(e) => {
                setDateOfFir(e.target.value);
                setError(false);
              }}
              value={date_of_fir}
              id="date_of_fir"
            />
          </div>
          <div className="form-group mt-3">
            <label>Crime Status:</label>
            <select 
            class="form-control" 
            id="crime_status" 
            value={crime_status}
            onChange={(e) => {setCrimeStatus(e.target.value)}}>
              {["", "REPORTED", "UN REPORTED"].map((status) => (
                <option>{status}</option>
              ))}
            </select>
          </div>
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
    </div>
  );
}
