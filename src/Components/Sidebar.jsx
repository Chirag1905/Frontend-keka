import React, { useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { RxExit } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useNavigate } from 'react-router-dom';

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Sidebar = () => {
  const navigate = useNavigate();

  // Leave Component
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [showw, setShoww] = useState(false);
  const [note, setNote] = useState("");
  const [type, setType] = useState("");
  const handleShow = () => setShoww(true);
  const handleClose = () => setShoww(false);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  // Add Leave
  const addLeave = () => {
    const data = {
      type: type,
      des: note,
    };
    axios.post("http://localhost:3012/addleave", data).then((res) => {
      Swal.fire("Leave Application Applied Successfully");
      setNote("");
    });
  };

  return (
    <>
      <div className="d-flex" style={{ height: "170vh" }}>
        <div className="d-flex flex-column" style={{ backgroundColor: "#273143", width: "6.9vw" }}>

          <button
            className="bg-transparent d-flex flex-column fs-5 border-0 w-100 align-items-center mt-4"
            onClick={() => { navigate("/") }}
            style={{ color: "white" }}>
            <HiOutlineHome color="white" />
            Home
          </button><br />

          <button
            className="bg-transparent d-flex flex-column fs-5 border-0 w-100 align-items-center"
            onClick={handleShow}
            style={{ color: "white" }}>
            <RxExit color="white" />
            Leave
          </button><br />

          <button
            className="bg-transparent d-flex flex-column fs-5 border-0 w-100 align-items-center"
            onClick={() => { navigate("/users") }}
            style={{ color: "white" }}>
            <FiUsers color="white" />
            Users
          </button>

        </div>

        {/* Modal */}
        <Modal show={showw} onHide={handleClose} size="lg" centered>

          <Modal.Header closeButton style={{ backgroundColor: "#1b2531", color: "white" }}>
            <Modal.Title>
              Leave Request for {localStorage.getItem("userName")}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#273143", color: "white" }}>
            <div className="container-fluid mx-auto">
              <div className="row d-flex justify-content-center px-2">
                <div className="col-xl-12 col-lg-8 col-md-9 text-center">
                  <form className="form-card" onSubmit="event.preventDefault()">
                    <div className="row justify-content-between text-left" style={{ height: "55vh" }}>
                      <div className="pt-4 col-lg-8 flex-column d-flex text-start text-white">

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <div className="row">

                            <div className="col-lg-6">
                              <label>FROM DATE</label>
                              <DemoContainer components={["DatePicker"]}>
                                <DatePicker value={value} onChange={(newValue) => setValue(newValue)}
                                  sx={{
                                    svg: { color: "#fff" },
                                    input: { color: "#fff" },
                                    borderColor: { color: "#fff" },
                                  }}
                                />
                              </DemoContainer><br />
                            </div>

                            <div className="col-lg-6">
                              <label>TO DATE</label>
                              <DemoContainer components={["DatePicker"]}>
                                <DatePicker value={value1} onChange={(newValue) => setValue1(newValue)}
                                  sx={{
                                    svg: { color: "#fff" },
                                    input: { color: "#fff" },
                                    borderColor: { color: "#fff" },
                                  }}
                                />
                              </DemoContainer>
                            </div>
                          </div>
                        </LocalizationProvider>

                        <div className="form-group mt-4 flex-column d-flex">
                          <label>Select available leave types</label>
                          <select onChange={(e) => { setType(e.target.value); }}
                            className="px-4 py-2 border rounded mt-3 border-light text-light"
                            style={{ backgroundColor: "#263043" }}>
                            <option selected disabled value>{" "}Select Leave Type</option>
                            <option value="Paid">Paid Leave</option>
                            <option value="Unpaid">Unpaid Leave</option>
                          </select>
                        </div>

                        <div className="form-group mt-4 flex-column d-flex">
                          <label className="form-control-label">Note</label>
                          <input
                            type="textarea"
                            id="ans"
                            name="ans"
                            rows="4"
                            cols="20"
                            onChange={handleNoteChange}
                            placeholder="Please enter reason for applying leave"
                            className="px-4 py-2 bg-transparent border rounded mt-3 border-light text-light" />
                        </div>

                      </div>
                      <div className="col-sm-4 pt-4 flex-column d-flex  ">
                        <div className="row">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <label>Calender</label>
                            <DateCalendar
                              sx={{
                                svg: { color: "#fff" },
                                input: { color: "#fff" },
                                borderColor: { color: "#fff" },
                              }}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer style={{ backgroundColor: "#263043", color: "white" }}>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="primary" onClick={() => { handleClose(), addLeave() }}>
              Request Leave
            </Button>
          </Modal.Footer>

        </Modal>
      </div>
    </>
  )
}
export default Sidebar


