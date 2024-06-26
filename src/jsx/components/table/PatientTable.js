import React, { useState, useRef, useEffect } from "react";
import { Table, Pagination, Badge, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
// import data from "./tableData.js";

const PatientTable = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#patientTable_basic_table tbody tr")
   );
   const sort = 5;
   const activePag = useRef(0);
   const [test, settest] = useState(0);

   // Active data
   const chageData = (frist, sec) => {
      for (var i = 0; i < data.length; ++i) {
         if (i >= frist && i < sec) {
            data[i].classList.remove("d-none");
         } else {
            data[i].classList.add("d-none");
         }
      }
   };
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#patientTable_basic_table tbody tr"));
      chackboxFun();
   }, [test]);

   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
   const onClick = (i) => {
      activePag.current = i;
      chageData(activePag.current * sort, (activePag.current + 1) * sort);
      settest(i);
   };
   const chackbox = document.querySelectorAll(".sorting_1 input");
   const motherChackBox = document.querySelector(".sorting_asc input");
   // console.log(document.querySelectorAll(".sorting_1 input")[0].checked);
   const chackboxFun = (type) => {
      for (let i = 0; i < chackbox.length; i++) {
         const element = chackbox[i];
         if (type === "all") {
            if (motherChackBox.checked) {
               element.checked = true;
            } else {
               element.checked = false;
            }
         } else {
            if (!element.checked) {
               motherChackBox.checked = false;
               break;
            } else {
               motherChackBox.checked = true;
            }
         }
      }
   };
   return (
      <div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">Patient</h4>
            </div>
            <div className="card-body">
               <div className="dataTables_wrapper">
                  <Table
                     responsive
                     striped
                     hover
                     id="patientTable_basic_table"
                     className="display dataTable no-footer  w-100"
                  >
                     <thead>
                        <tr role="row">
                           <th className="sorting_asc">
                              <div className="custom-control custom-checkbox">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun("all")}
                                    className="custom-control-input"
                                    id="checkAll"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="checkAll"
                                 />
                              </div>
                           </th>
                           <th className="sorting">Patient ID</th>
                           <th className="sorting">Date Check in</th>
                           <th className="sorting">Patient Name</th>
                           <th className="sorting">Doctor Assgined</th>
                           <th className="sorting">Disease</th>
                           <th className="sorting">Status</th>
                           <th className="sorting">Room no</th>
                           <th className="sorting">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr role="row" className="odd">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox2"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox2"
                                 />
                              </div>
                           </td>
                           <td>#P-00001</td>
                           <td>26/02/2020, 12:42 AM</td>
                           <td>Tiger Nixon</td>
                           <td>Dr. Cedric</td>
                           <td>Cold &amp; Flu</td>
                           <td>
                              <span className="badge light badge-danger">
                                 <i className="fa fa-circle text-danger mr-1" />
                                 New Patient
                              </span>
                           </td>
                           <td>AB-001</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="even">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox3"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox3"
                                 />
                              </div>
                           </td>
                           <td>#P-00002</td>
                           <td>28/02/2020, 12:42 AM</td>
                           <td>Garrett Winters</td>
                           <td>Dr. Cedric</td>
                           <td>Sleep Problem</td>
                           <td>
                              <span className="badge light badge-warning">
                                 <i className="fa fa-circle text-warning mr-1" />
                                 In Treatment
                              </span>
                           </td>
                           <td>AB-002</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="odd">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox4"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox4"
                                 />
                              </div>
                           </td>
                           <td>#P-00003</td>
                           <td>26/02/2020, 12:42 AM</td>
                           <td>Ashton Cox</td>
                           <td>Dr. Rhona</td>
                           <td>Cold &amp; Flu</td>
                           <td>
                              <span className="badge light badge-success">
                                 <i className="fa fa-circle text-success mr-1" />
                                 Recovered
                              </span>
                           </td>
                           <td>AB-003</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="even">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox5"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox5"
                                 />
                              </div>
                           </td>
                           <td>#P-00004</td>
                           <td>29/02/2020, 12:42 AM</td>
                           <td>Ashton Cox</td>
                           <td>Dr. Cedric</td>
                           <td>Cold &amp; Flu</td>
                           <td>
                              <span className="badge light badge-warning">
                                 <i className="fa fa-circle text-warning mr-1" />
                                 In Treatment
                              </span>
                           </td>
                           <td>AB-004</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="odd">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox6"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox6"
                                 />
                              </div>
                           </td>
                           <td>#P-00005</td>
                           <td>28/02/2020, 12:42 AM</td>
                           <td>Ashton Cox</td>
                           <td>Dr. Cedric</td>
                           <td>Cold &amp; Flu</td>
                           <td>
                              <span className="badge light badge-warning">
                                 <i className="fa fa-circle text-warning mr-1" />
                                 In Treatment
                              </span>
                           </td>
                           <td>AB-005</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="even">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox7"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox7"
                                 />
                              </div>
                           </td>
                           <td>#P-00006</td>
                           <td>28/02/2020, 12:42 AM</td>
                           <td>Ashton Cox</td>
                           <td>Dr. Rhona</td>
                           <td>Sleep Problem</td>
                           <td>
                              <span className="badge light badge-warning">
                                 <i className="fa fa-circle text-warning mr-1" />
                                 In Treatment
                              </span>
                           </td>
                           <td>AB-006</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="odd">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox8"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox8"
                                 />
                              </div>
                           </td>
                           <td>#P-00007</td>
                           <td>26/02/2020, 12:42 AM</td>
                           <td>Airi Satou</td>
                           <td>Dr. Rhona</td>
                           <td>Cold &amp; Flu</td>
                           <td>
                              <span className="badge light badge-danger">
                                 <i className="fa fa-circle text-danger mr-1" />
                                 New Patient
                              </span>
                           </td>
                           <td>AB-007</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="even">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox9"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox9"
                                 />
                              </div>
                           </td>
                           <td>#P-00008</td>
                           <td>29/02/2020, 12:42 AM</td>
                           <td>Airi Satou</td>
                           <td>Dr. Garrett </td>
                           <td>Sleep Problem</td>
                           <td>
                              <span className="badge light badge-warning">
                                 <i className="fa fa-circle text-warning mr-1" />
                                 In Treatment
                              </span>
                           </td>
                           <td>AB-008</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="odd">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox10"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox10"
                                 />
                              </div>
                           </td>
                           <td>#P-00009</td>
                           <td>25/02/2020, 12:42 AM</td>
                           <td>Airi Satou</td>
                           <td>Dr. Rhona</td>
                           <td>Cold &amp; Flu</td>
                           <td>
                              <span className="badge light badge-danger">
                                 <i className="fa fa-circle text-danger mr-1" />
                                 New Patient
                              </span>
                           </td>
                           <td>AB-009</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                        <tr role="row" className="even">
                           <td className="sorting_1">
                              <div className="custom-control custom-checkbox ">
                                 <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="custom-control-input"
                                    id="customCheckBox11"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customCheckBox11"
                                 />
                              </div>
                           </td>
                           <td>#P-00010</td>
                           <td>26/02/2020, 12:42 AM</td>
                           <td>Airi Satou</td>
                           <td>Dr. Rhona</td>
                           <td>Sleep Problem</td>
                           <td>
                              <span className="badge light badge-danger">
                                 <i className="fa fa-circle text-danger mr-1" />
                                 New Patient
                              </span>
                           </td>
                           <td>AB-010</td>
                           <td>
                              <Dropdown className="dropdown ml-auto text-right">
                                 <Dropdown.Toggle
                                    variant=""
                                    className="btn-link icon-false"
                                    data-toggle="dropdown"
                                 >
                                    <svg
                                       width="24px"
                                       height="24px"
                                       viewBox="0 0 24 24"
                                       version="1.1"
                                    >
                                       <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                       >
                                          <rect
                                             x={0}
                                             y={0}
                                             width={24}
                                             height={24}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={5}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={12}
                                             cy={12}
                                             r={2}
                                          />
                                          <circle
                                             fill="#000000"
                                             cx={19}
                                             cy={12}
                                             r={2}
                                          />
                                       </g>
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item>
                                       Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </td>
                        </tr>
                     </tbody>
                  </Table>

                  <div className="d-sm-flex text-center align-items-center justify-content-between">
                     <div
                        className="dataTables_info"
                        id="example_info"
                        role="status"
                        aria-live="polite"
                     >
                        Showing {activePag.current * sort + 1} to{" "}
                        {data.length > (activePag.current + 1) * sort
                           ? (activePag.current + 1) * sort
                           : data.length}{" "}
                        of {data.length} entries
                     </div>
                     <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="example_paginate"
                     >
                        <Link
                           className="paginate_button previous disabled"
                           to="/table-datatable-basic"
                           onClick={() =>
                              activePag.current > 0 &&
                              onClick(activePag.current - 1)
                           }
                        >
                           Previous
                        </Link>
                        <span>
                           {paggination.map((number, i) => (
                              <Link
                                 key={i}
                                 to="/table-datatable-basic"
                                 className={`paginate_button  ${
                                    activePag.current === i ? "current" : ""
                                 } ${i > 0 ? "ml-1" : ""}`}
                                 onClick={() => onClick(i)}
                              >
                                 {number}
                              </Link>
                           ))}
                        </span>
                        <Link
                           className="paginate_button next"
                           to="/table-datatable-basic"
                           onClick={() =>
                              activePag.current + 1 < paggination.length &&
                              onClick(activePag.current + 1)
                           }
                        >
                           Next
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PatientTable;
