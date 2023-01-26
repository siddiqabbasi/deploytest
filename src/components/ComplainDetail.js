import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ComplainDetail = () => {
  const {state} = useLocation();
  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div className="row justify-content-center pt-5">
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
            </tr>
          </thead>
          <tbody>
            {state.map((complain, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplainDetail;
