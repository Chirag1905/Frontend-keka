import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
// import "./Register.css"

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let userid = localStorage.getItem("userDetail");
    if (userid != null) {
      navigate("/");
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    axios.post("http://localhost:3012/adduser", data).then((res) => {
      if (res.data != null) {
        localStorage.setItem("userDetail", res.data.uuid);
        localStorage.setItem("userName", res.data.name);
        navigate("/");
        setName("");
        setEmail("");
        setPassword("");
      }
    });
  };

  return (
    <>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register</h3>
                <form className="requires-validation" onSubmit={handleSubmit}>

                  <div className="col-md-12">
                    <input className="form-control" type="text" name="name" placeholder="Enter Your Name" onChange={handleNameChange} required />
                    <div className="valid-feedback">Username field is valid!</div>
                    <div className="invalid-feedback">Username field cannot be blank!</div>
                  </div>

                  <div className="col-md-12">
                    <input className="form-control" type="email" name="email" placeholder="Enter Your Email" onChange={handleEmailChange} required />
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">Email field cannot be blank!</div>
                  </div>

                  <div className="col-md-12">
                    <input className="form-control" type="password" name="password" placeholder="Enter Your Password" onChange={handlePasswordChange} required />
                    <div className="valid-feedback">Password field is valid!</div>
                    <div className="invalid-feedback">Password field cannot be blank!</div>
                  </div>

                  <div className="form-button mt-3">
                    <button id="submit" type="submit" className="btn btn-primary">Sign Up</button>
                  </div><br />

                  <div className="text-right">
                    <span className="btn btn-link" onClick={() => navigate("/login")}>
                      Click Here To Login
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
