import '../App.css';
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

function Verification() {
    const [crime_type, setCrimeType] = useState("mobile");
    //   const [isError, setError] = useState(false);
    const [imei_no, setIMEINo] = useState(null);
    const [registration_no, setRegistrationNo] = useState(null);
    const [engine_no, setEngineNo] = useState(null);
    const [chasis_no, setChasisNo] = useState(null);


    const submitForm = () => {
        console.log("hello", imei_no,registration_no,engine_no,chasis_no)
    }

    return (

        <div className='col-xxl-6 col-xl-6 col-md-6 col-sm-6 col-xs-12'>
            <div className="contact-form-wrapper d-flex justify-content-center">
                <form action="#" class="contact-form">
                    <h5 className="title">Verification of your mobile Or Vehicle here</h5>
                    <div className="submit-button-wrapper">
                        <div className='row'>
                            <div className='col-xxl-6 col-xl-6 col-md-6 col-sm-6 col-xs-12'>
                                {/* <input type="submit" value="Vehicle"/> */}
                                <button
                                    type="submit"
                                    class="btn btn-primary btns"
                                    onClick={() => {
                                        setIMEINo(null);
                                        setCrimeType("vehicle");
                                        // setError(false);
                                    }}
                                    style={{ width: "100%" }}>
                                    Vehicle
                                </button>

                            </div>
                            <div className='col-xxl-6 col-xl-6 col-md-6 col-sm-6 col-xs-12'>
                                {/* <input type="submit" value="Mobile"/> */}
                                <button
                                    type="submit"
                                    class="btn btn-primary btns"
                                    onClick={() => {
                                        setRegistrationNo(null);
                                        setEngineNo(null);
                                        setChasisNo(null);
                                        setCrimeType("mobile");
                                        // setError(false);
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
                            <input
                                type="number"
                                className="form-control rounded border-white mb-3 form-input"
                                placeholder="Enter your mobile registration number here"
                                onChange={(e) => {
                                    setIMEINo(e.target.value);
                                    // setError(false);
                                }}
                                value={imei_no}
                                id="imei_no"
                                required
                            />
                        </div>
                    ) : null}
                    {crime_type == "vehicle" ? (
                        <div>
                            <input type="number" className="form-control rounded border-white mb-3 form-input" placeholder="Enter your Engine number here"
                                onChange={(e) => {
                                    setRegistrationNo(e.target.value);
                                    // setError(false);
                                }}
                                value={registration_no}
                                id="registration_no"
                                required
                            />
                        </div>
                    ) : null}
                    {crime_type == "vehicle" ? (
                        <div>
                            <input type="number" className="form-control rounded border-white mb-3 form-input" placeholder="Enter your Chasis number here"
                                onChange={(e) => {
                                    setEngineNo(e.target.value);
                                    // setError(false);
                                }}
                                value={engine_no}
                                id="engine_no"
                                required
                            />
                        </div>
                    ) : null}
                    {crime_type == "vehicle" ? (
                        <div>
                            <input type="number" className="form-control rounded border-white mb-3 form-input" placeholder="Enter your IMEI number here"
                                onChange={(e) => {
                                    setChasisNo(e.target.value);
                                    // setError(false);
                                }}
                                value={chasis_no}
                                id="chasis_no"
                                required
                            />
                        </div>
                    ) : null}

                    <div className="submit-button-wrapper">
                        <input
                            type="submit"
                            value="Search"
                            onClick={submitForm}
                        />
                    </div>
                </form>
            </div>
        </div>


    );
}
export default Verification;