import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import moment from "moment";

import Header from "./Header";
import Sidebar from "./Sidebar";

import { MdSouthWest } from "react-icons/md";
import { ImInfo } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";

import { Tooltip } from "@mui/material";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let userid = localStorage.getItem("userDetail");
    if (userid === null) {
      navigate("/login");
    }
  }, []);

  // Sidebar Component
  const [time, setTime] = useState([]);
  const timeDiffrence = [];
  const currentFullDate = new Date().toLocaleTimeString();
  const currentDate = new Date().toDateString();
  // const [monthDetail, setMonthDetail] = useState("Apr");
  // const months = [
  //      'Jan',
  //      'Feb',
  //      'Mar',
  //      'Apr',
  //      'May',
  //      'Jun',
  //      'Jul',
  //      'Aug',
  //      'Sep',
  //      'Oct',
  //      'Nov',
  //      'Dec'
  // ]
  const timeset = () => {
    setTime((current) => [...current, currentFullDate]);
  };
  if (time.length === 2) {
    timeDiffrence.push(
      moment(time[1], "HH:mm:ss").diff(moment(time[0], "HH:mm:ss"), "hours")
    );
    timeDiffrence.push(
      moment(time[1], "HH:mm:ss").diff(moment(time[0], "HH:mm:ss"), "minutes")
    );
    timeDiffrence.push(
      moment(time[1], "HH:mm:ss").diff(moment(time[0], "HH:mm:ss"), "seconds")
    );
  }
  //attendence
  const [data, setData] = useState([]);
  async function getData() {
    axios.get("http://localhost:3012/getAttendence").then((res) => {
      setData(res.data);
    });
  }
  const firstPunch = (e) => {
    e.preventDefault();
    const currentFullDate = new Date().toLocaleTimeString();
    const currentDate = new Date().toDateString();
    const data = {
      date: currentDate,
      user_uuid: localStorage.getItem("userDetail"),
      time: currentFullDate,
    };
    axios.post("http://localhost:3012/addAttendence", data).then((res) => {
      getData();
    });
  };
  // time
  const addTime = (id) => {
    const currentFullDate = new Date().toLocaleTimeString();
    const data = {
      time: currentFullDate,
      attendance_id: id,
    };
    axios.post("http://localhost:3012/addTime", data).then((res) => {
      getData();
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#1b2531", height: "92vh", overflowY: "scroll" }}>
        <div className="d-flex">
          <Sidebar />
          <div className="p-4" style={{width: "93vw", borderRadius:"25px"}}>
            <table className="table text-center">
              <thead
                className="thead"
                style={{ backgroundColor: "#273143", color: "white" }}>
                <tr>
                  <th>DATE</th>
                  <th>EFFECTIVE HOURS</th>
                  <th>GROSS HOURS</th>
                  <th>IN</th>
                  <th>OUT</th>
                  <th>TIMELINE</th>
                </tr>
              </thead><br />
              <tbody
                className="mt-4 p-4"
                style={{ backgroundColor: "#273143", color: "white" }}
              >
                {!data.find(
                  (findData) => findData.date === currentDate && findData.user_uuid === localStorage.getItem("userDetail")
                ) && (
                    <tr className="mt-4">
                      <td>{currentDate}</td>
                      <td>Pending</td>
                      <td>Pending</td>
                      <td>
                        <button className="btn btn-success" onClick={firstPunch}>
                          {" "}
                          <FiLogOut style={{ transform: "rotate(180deg)" }} />
                        </button>
                      </td>

                      <td>
                        <button className="btn btn-danger" disabled>
                          <FiLogOut />
                        </button>
                      </td>

                      <td></td>
                    </tr>
                  )}
                {data
                  ?.slice(0)
                  .reverse()
                  .map(
                    (item) =>
                      item.user_uuid === localStorage.getItem("userDetail") && (
                        <tr className="mt-4" key={item.uuid}>
                          <td>{item.date}</td>
                          <td>
                            {moment(item.Times[0].time, "HH:mm:ss").diff(moment(item.Times[item.Times.length - 1].time, "HH:mm:ss"), "hours")}h{" "}
                            {moment(item.Times[0].time, "HH:mm:ss").diff(moment(item.Times[item.Times.length - 1].time, "HH:mm:ss"), "minutes") % 60}m{" "}
                            {moment(item.Times[0].time, "HH:mm:ss").diff(moment(item.Times[item.Times.length - 1].time, "HH:mm:ss"), "seconds") % 60}s
                          </td>
                          <td>
                            {moment(item.Times[0].time, "HH:mm:ss").diff(moment(item.Times[item.Times.length - 1].time, "HH:mm:ss"), "hours")}h{" "}
                            {moment(item.Times[0].time, "HH:mm:ss").diff(moment(item.Times[item.Times.length - 1].time, "HH:mm:ss"), "minutes") % 60}m{" "}
                            {moment(item.Times[0].time, "HH:mm:ss").diff(moment(item.Times[item.Times.length - 1].time, "HH:mm:ss"), "seconds") % 60}s
                          </td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => addTime(item.id)}
                              disabled={
                                currentDate !== item.date ||
                                item.Times.length % 2 === 1
                              }
                            >
                              <FiLogOut
                                style={{ transform: "rotate(180deg)" }}
                              />
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => addTime(item.id)}
                              disabled={
                                currentDate !== item.date ||
                                item.Times.length % 2 === 0
                              }
                            >
                              <FiLogOut />
                            </button>
                          </td>
                          <td>
                            <Tooltip
                              title={item.Times.map((itemData, index) => (
                                <div className="p-1 " key={itemData.id}>
                                  {index % 2 !== 0 ? (
                                    <MdSouthWest
                                      style={{ transform: "rotate(180deg)" }}
                                    />
                                  ) : (
                                    <MdSouthWest />
                                  )}
                                  <span
                                    style={{
                                      fontSize: "15px",
                                    }}
                                  >
                                    {item.Times[index].time}{" "}
                                  </span>
                                  <br />
                                </div>
                              )).reverse()}
                            >
                              <button className="btn">
                                <ImInfo color="#666f4a" />
                              </button>
                            </Tooltip>
                          </td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// sequelize ?