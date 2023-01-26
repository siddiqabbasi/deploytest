import { useState, useEffect } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";

export default function Verification() {
  const { http, setToken } = AuthUser();
  const navigate = useNavigate();
  const [crime_type, setCrimeType] = useState("mobile");
  const [imei_no, setIMEINo] = useState(null);
  const [registration_no, setRegistrationNo] = useState(null);
  const [engine_no, setEngineNo] = useState(null);
  const [chasis_no, setChasisNo] = useState(null);
  const [isError, setError] = useState(false);

  const initialSettings = () => {
    // setCrimeType("mobile");
    setIMEINo("");
    setRegistrationNo("");
    setEngineNo("");
    setChasisNo("");
    setError(false);
  };

  useEffect(() => { });

  const submitForm = () => {
    console.log(crime_type, imei_no, registration_no, engine_no, chasis_no);

    const mobileData = crime_type == "mobile" && imei_no,
      vehicleData =
        crime_type == "vehicle" && registration_no && engine_no && chasis_no;
    if (mobileData || vehicleData) {
      let formData = new FormData();
      mobileData && formData.append("imei_no", imei_no);
      vehicleData && formData.append("registration_no", registration_no);
      vehicleData && formData.append("engine_no", engine_no);
      vehicleData && formData.append("chasis_no", chasis_no);

      console.log("formData", [...formData]);
      // api call
      http
        .post("/searchcomplain", formData)
        .then((res) => {
          console.log(res.data, res.data.length);
          // if (res.data.length > 0) navigate("/complainDetail", { state: res.data });
          if (res.data.length > 0) alert(`This ${crime_type} has stolen report`)
          else alert("no record found");
          // alert('Your complain has beed registered, suppot person will call you in 24 hours')
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
    <div className="col-sm-4">
      <div className="card p-4">
        <h4 className="text-center mb-3">
          Verification of your mobile Or Vehicle here{" "}
        </h4>
        <div
          className="row justify-content-center"
          style={{ marginTop: "20px" }}
        >
          {/* <div
            className="col-sm-5 border border-dark rounded"
            onClick={() => {
              setIMEINo(null);
              setCrimeType("vehicle");
              setError(false);
            }}
          >
            <h5>Vehicle</h5>
          </div> */}
          {/* <div
            className="col-sm-5 border border-dark rounded"
            onClick={() => {
              setRegistrationNo(null);
              setEngineNo(null);
              setChasisNo(null);
              setCrimeType("mobile");
              setError(false);
            }}
          >
            <h5>Mobile</h5>
          </div> */}
          <button
            type="button" class="btn btn-primary col-sm-4"
            onClick={() => {
              setIMEINo(null);
              setCrimeType("vehicle");
              setError(false);
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
              setError(false);
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
          <p style={{ alignSelf: "center", margin: "0px", marginTop: "10px" }}>
            All fields are required
          </p>
        ) : null}
        <button
          type="button"
          onClick={submitForm}
          className="btn btn-primary mt-4"
        >
          Search
        </button>
      </div>
    </div>
  );
}
