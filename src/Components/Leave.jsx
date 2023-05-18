// import React, { useEffect, useState } from 'react'
// // import "./Leave.css"
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import ReactModal from 'react-modal';




// const Leave = () => {
//      const [value, setValue] = useState(dayjs('2022-04-17'));
//      const [value1, setValue1] = useState(dayjs('2022-04-17'));
//      const [isOpen, setIsOpen] = useState(false);
//      return (
//           <>
//                <ReactModal
//                     isOpen={isOpen}
//                // onRequestClose={() => setIsOpen(false)}
//                >
//                     {/* <button onClick={setIsOpen(false)}><RxExit/></button> */}
//                     <div className="form-body">
//                          <form className="requires-validation" noValidate>

//                               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
//                                         <DatePicker
//                                              label="From Date"
//                                              value={value}
//                                              onChange={(newValue) => setValue(newValue)}
//                                         />
//                                         <DatePicker
//                                              label="To Date"
//                                              value={value1}
//                                              onChange={(newValue) => setValue1(newValue)}
//                                         />
//                                    </DemoContainer>
//                               </LocalizationProvider>
//                               <div className="col-md-12">
//                                    <label>Select available leave types</label>
//                                    <select className="form-select mt-3" required>
//                                         <option selected disabled value> Seleact Leave Type</option>
//                                         <option value="jweb">Paid Leave</option>
//                                         <option value="sweb">Unpaid Leave</option>
//                                    </select>
//                               </div>
//                               <br />
//                               <div className="col-md-12">
//                                    <input className="form-control" type="textarea" name="note" placeholder="Please enter reason for applying leave" required />
//                               </div>
//                               <div className="form-button mt-3">
//                                    <button id="submit" type="submit" className="btn btn-primary">Request Leave</button>
//                               </div>
//                          </form>
//                     </div>
//                </ReactModal>


//                {/* <div>
//       <button onClick={setIsOpen}>Open Modal</button>
//     </div> */}
//                {/* <div className="form-body">
//                <div className="row">
//                     <div className="form-holder">
//                          <form className="requires-validation" noValidate>

//                               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
//                                         <DatePicker
//                                              label="From Date"
//                                              value={value}
//                                              onChange={(newValue) => setValue(newValue)}
//                                         />
//                                         <DatePicker
//                                              label="To Date"
//                                              value={value1}
//                                              onChange={(newValue) => setValue1(newValue)}
//                                         />
//                                    </DemoContainer>
//                               </LocalizationProvider>

//                               <div className="col-md-12">
//                                    <label>Select available leave types</label>
//                                    <select className="form-select mt-3" required>
//                                         <option selected disabled value> Seleact Leave Type</option>
//                                         <option value="jweb">Paid Leave</option>
//                                         <option value="sweb">Unpaid Leave</option>
//                                    </select>
//                               </div>
//                               <br />
//                               <div className="col-md-12">
//                                    <input className="form-control" type="textarea" name="note" placeholder="Please enter result for applying leave" required />
//                               </div>
//                               <div className="form-button mt-3">
//                                    <button id="submit" type="submit" className="btn btn-primary">Request Leave</button>
//                               </div>
//                          </form>

//                     </div>
//                </div>
//           </div> */}
//           </>
//      )
// }

// export default Leave
