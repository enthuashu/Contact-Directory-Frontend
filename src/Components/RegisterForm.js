import React, { useState } from "react";

const RegisterForm = () => {
  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [address, setaddress] = useState("");
  const [otp, setotp] = useState("");
  const [isphoneverified, setisphoneverified] = useState(false);
  const [isrequestedotp, setisrequestedotp] = useState(false);

  const sendotp = async () => {
    try {
      setisrequestedotp(true);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyotp = async () => {
    try {
      setisphoneverified(true);
      alert(`Your OTP verified ${otp}`);
    } catch (error) {
      console.log(error);
    }
  };
  const submitdetails = () => {
    try {
      if (isphoneverified === false) {
        return alert("Please verify your phone number first");
      } else {
        alert("your details submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Phone Number
          </label>
          <input
            value={phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {isrequestedotp === true ? (
          <>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Enter OTP sent to Phone Number
              </label>
              <input
                value={otp}
                onChange={(e) => setotp(e.target.value)}
                type="number"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={() => verifyotp()}
                type="button"
                className="btn btn-primary"
              >
                Verify OTP
              </button>
            </div>
          </>
        ) : (
          <div className="mb-3">
            <button
              onClick={() => sendotp()}
              type="button"
              className="btn btn-primary"
            >
              Send OTP
            </button>
          </div>
        )}

        <div className="mb-3">
          <button
            onClick={() => submitdetails()}
            type="button"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
