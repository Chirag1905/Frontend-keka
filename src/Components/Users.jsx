import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Users = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#1b2531", height: "92vh", overflowY: "scroll" }}>
        <div className="d-flex">
          <Sidebar />
          <div className="p-4" style={{ width: "93vw", borderRadius:"25px" }}>
            <table className="table text-center">
              <thead
                className="thead"
                style={{ backgroundColor: "#273143", color: "white"}}>
                <tr>
                  <th>Leave ID</th>
                  <th>User Name</th>
                  <th>Leave Type</th>
                  <th>Actions</th>
                </tr>
              </thead><br />
              <tbody
                className="mt-4 p-4"
                style={{ backgroundColor: "#273143", color: "white" }}
              >
                <tr>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Users