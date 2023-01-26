import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { http } = AuthUser();
  const [allComplains, setComplainsData] = useState("");
  const [showData, setShowData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchComplainsDetail();
  }, []);

  const fetchComplainsDetail = () => {
    http.get("/list").then((res) => {
      // console.log(res);
      setComplainsData(res.data);
      setShowData(res.data)
    });
  };

  const renderTable = () => {
    if (showData) {
      return (
        <div className="row justify-content-center pt-5">
          <div className="row">
            <div className="row col-md-6 ofset-4">
              <div className="col-md-4">
                <button
                  type="button"
                  onClick={() => {                    
                    let mobileList = allComplains.filter((elem) => elem.crime_type == 'mobile')
                    setShowData(mobileList)
                  }}
                  className="btn btn-primary mt-4"
                >
                  Mobile
                </button>
              </div>
              <div className="col-md-4">
                <button
                  type="button"
                  onClick={() => {
                    let vehicleList = allComplains.filter((elem) => elem.crime_type == 'vehicle')
                    setShowData(vehicleList)
                  }}
                  className="btn btn-primary mt-4"
                >
                  Vehicle
                </button>
              </div>
              <div className="col-md-4">
                <button
                  type="button"
                  onClick={() => setShowData(allComplains)}
                  className="btn btn-primary mt-4"
                >
                  All Data
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Complainant Name</th>
                  <th>Complainant Mobile no.</th>
                  {/* <th>Offence Date</th> */}
                  <th>Complain Date</th>
                  <th>Crime Type</th>
                  <th>IMEI No.</th>
                  <th>Registration No.</th>
                  <th>Engine No.</th>
                  <th>Chasis No</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Color</th>
                  <th>Police Station</th>
                  <th>District</th>
                  <th>Location</th>
                  <th>Incident Date</th>
                  <th>Status Crime Type</th>
                  <th>FIR No.</th>
                  <th>Date of FIR</th>
                  <th>Crime Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {showData.map((complain, index) => (
                  <tr key={index}>
                    <td>{complain.id}</td>
                    <td>{complain.complainant_name}</td>
                    <td>{complain.complainant_mobile_no}</td>
                    {/* <td>{complain.offence_date}</td> */}
                    <td>{complain.complain_date}</td>
                    <td>{complain.crime_type}</td>
                    <td>{complain.imei_no}</td>
                    <td>{complain.registration_no}</td>
                    <td>{complain.engine_no}</td>
                    <td>{complain.chasis_no}</td>
                    <td>{complain.make}</td>
                    <td>{complain.model}</td>
                    <td>{complain.color}</td>
                    <td>{complain.police_station}</td>
                    <td>{complain.district}</td>
                    <td>{complain.location}</td>
                    <td>{complain.incident_date}</td>
                    <td>{complain.status_crime_type}</td>
                    <td>{complain.fir_no}</td>
                    <td>{complain.date_of_fir}</td>
                    <td>{complain.crime_status}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary mt-4"
                        onClick={() =>
                          navigate("/updateComplain", { state: complain, callBack: () => {console.log('wapis chala gya')} })
                        }
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <p>Loading.....</p>;
    }
  };

  return (
    <div>
      <h1 className="mb-4 mt-4">Dashboard page</h1>
      {renderTable()}
    </div>
  );
}
