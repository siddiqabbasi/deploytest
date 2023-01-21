import '../App.css';
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

function Registration() {
  const [crime_type, setCrimeType] = useState("mobile");
  const [isError, setError] = useState(false);

  return (
    
        <div className='col-xxl-6 col-xl-6 col-md-6 col-sm-6 col-xs-12'>
          <div className="contact-form-wrapper d-flex justify-content-center">
            <form action="#" class="contact-form">
              <h5 className="title">Register your Complain here</h5>
              <div>
                <input
                  type="name"
                  className="form-control rounded border-white mb-3 form-input"
                  placeholder="Enter your name here"
                />
              </div>
              <div>
                <input
                  type="number"
                  className="form-control rounded border-white mb-3 form-input"
                  placeholder="Enter you mobile number here"

                />
              </div>
              <div>
                <input type="name" className="form-control rounded border-white mb-3 form-input" placeholder="Enter your CNIC number here" />
              </div>
              <div className="submit-button-wrapper">
                <div className='row'>
                  <div className='col-xxl-6 col-xl-6 col-md-6 col-sm-6 col-xs-12'>
                    {/* <input type="submit" value="Vehicle"/> */}
                    <button
                      class="btn btn-primary btns"
                      onClick={() => {
                        // setIMEINo(null);
                        setCrimeType("vehicle");
                      }}
                      style={{ width: "100%" }}>
                      Vehicle
                    </button>

                  </div>
                  <div className='col-xxl-6 col-xl-6 col-md-6 col-sm-6 col-xs-12'>
                    {/* <input type="submit" value="Mobile"/> */}
                    <button

                      class="btn btn-primary btns"
                      onClick={() => {
                        setCrimeType("mobile");
                      }}
                      style={{ width: "100%" }}>
                      Mobile
                    </button>
                  </div>
                  
                  
                </div>
              </div>
              <br />
              {crime_type == "mobile" ? (
                    <div>
                      <input type="name" className="form-control rounded border-white mb-3 form-input" placeholder="Enter your IMEI number here" />
                    </div>
                  ) : null}
                  {crime_type == "vehicle" ? (
                    <div>
                      <input type="name" className="form-control rounded border-white mb-3 form-input" placeholder="Enter your Engine number here" />
                    </div>
                  ) : null}
                  {crime_type == "vehicle" ? (
                    <div>
                      <input type="name" className="form-control rounded border-white mb-3 form-input" placeholder="Enter your Chasis number here" />
                    </div>
                  ) : null}
                  {crime_type == "vehicle" ? (
                    <div>
                      <input type="name" className="form-control rounded border-white mb-3 form-input" placeholder="Enter your IMEI number here" />
                    </div>
                  ) : null}


                  {isError ? (
                    <p
                      style={{ alignSelf: "center", margin: "0px", marginTop: "10px" }}
                    >
                      All fields are required
                    </p>
                  ) : null}

              <div className="submit-button-wrapper">
                <input
                  type="submit"
                  value="Register"
                // onClick={submitForm}
                />
              </div>
            </form>
          </div>
        </div>
  
  );
}

export default Registration;
