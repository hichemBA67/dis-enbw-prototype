import React from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

// Images
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import avatar4 from "../../../images/avatar/4.jpg";
import svg from "../../../images/svg/welcom-card.svg";

import { Dropdown, Nav, Tab } from "react-bootstrap";
import LineChart7 from "../charts/Chartjs/line7";
import BarChart7 from "../charts/Chartjs/bar7";
const ApexPie3 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/Pie3"), 1000)
);

const Home = () => {
   return (
      <>
         <div className="row">
            <div className="col-xl-12">
               <div className="welcome-card rounded pl-5 pt-5 pb-4 mt-3 position-relative mb-5">
                  <h4 className="text-warning">Welcome to Tixia!</h4>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dumm.
                  </p>
                  <Link className="btn btn-warning btn-rounded" to="/">
                     Learn More{" "}
                     <i className="las la-long-arrow-alt-right ml-4" />
                  </Link>
                  <Link className="btn-link text-dark ml-3" to="/">
                     Remind Me Later
                  </Link>
                  <img src={svg} alt="" className="position-absolute" />
               </div>
            </div>
            <div className="col-xl-12">
               <Tab.Container defaultActiveKey="monthly">
                  <div id="user-activity" className="card">
                     <div className="card-header border-0 pb-0 d-sm-flex d-block">
                        <div>
                           <h4 className="card-title mb-1">Sales Revenue</h4>
                        </div>
                        <div className="card-action card-tabs mt-3 mt-sm-0">
                           <Nav className="nav nav-tabs" role="tablist">
                              <Nav.Item className="nav-item">
                                 <Nav.Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    role="tab"
                                    eventKey="monthly"
                                 >
                                    Monthly
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="nav-item">
                                 <Nav.Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    role="tab"
                                    eventKey="weekly"
                                 >
                                    Weekly
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="nav-item">
                                 <Nav.Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    role="tab"
                                    eventKey="today"
                                 >
                                    Today
                                 </Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>
                     </div>
                     <div className="card-body">
                        <Tab.Content className="tab-content" id="myTabContent">
                           <Tab.Pane eventKey="monthly">
                              <LineChart7 data={0} />
                           </Tab.Pane>
                           <Tab.Pane eventKey="weekly">
                              <LineChart7 data={1} />
                           </Tab.Pane>
                           <Tab.Pane eventKey="today">
                              <LineChart7 data={2} />
                           </Tab.Pane>
                        </Tab.Content>
                     </div>
                  </div>
               </Tab.Container>
            </div>
            <div className="col-xl-6 col-xxxl-12 col-lg-6">
               <div className="card">
                  <div className="card-header border-0 pb-3 d-sm-flex d-block ">
                     <h4 className="card-title">Latest Sales</h4>
                     <div className="d-flex mt-3 mt-sm-0">
                        <Dropdown className="dropdown ">
                           <Dropdown.Toggle
                              type="button"
                              className="btn btn-primary dropdown-toggle light btn-sm btn-rounded"
                              data-toggle="dropdown"
                              aria-expanded="false"
                           >
                              Weekly
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="dropdown-menu">
                              <Dropdown.Item className="dropdown-item" to="/">
                                 Daily
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="/">
                                 Weekly
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="/">
                                 Monthly
                              </Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="dropdown ml-2">
                           <Dropdown.Toggle
                              type="button"
                              className="btn btn-primary dropdown-toggle light btn-sm btn-rounded"
                              data-toggle="dropdown"
                              aria-expanded="false"
                           >
                              2020
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="dropdown-menu">
                              <Dropdown.Item className="dropdown-item" to="/">
                                 2020
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="/">
                                 2019
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="/">
                                 2018
                              </Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                  </div>
                  <div className="card-body">
                     <div className="row mx-0 align-items-center">
                        <div className="col-sm-8 col-md-7 col-xxl-7 d-flex justify-content-center px-0 text-center a mb-3 mb-sm-0">
                           {/* <div id="chart" className="d-inline-block" /> */}
                           <ApexPie3 />
                        </div>
                        <div className="col-sm-4 col-md-5 col-xxl-5 px-0">
                           <div className="chart-deta">
                              <div className="col px-0">
                                 <span className="bg-warning" />
                                 <div>
                                    <p className="fs-14">Ticket Left</p>
                                    <h3>21,512</h3>
                                 </div>
                              </div>
                              <div className="col px-0">
                                 <span className="bg-primary" />
                                 <div>
                                    <p className="fs-14">Ticket Sold</p>
                                    <h3>456,721</h3>
                                 </div>
                              </div>
                              <div className="col px-0">
                                 <span className="bg-success" />
                                 <div>
                                    <p className="fs-14">Event Held</p>
                                    <h3>235</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-xxxl-12 col-lg-6">
               <div className="card widget-media">
                  <div className="card-header border-0 pb-0 ">
                     <h4 className="text-black">Latest Sales</h4>
                     <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                           className="btn-link icon-false p-0"
                           variant=""
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
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
                                 <rect x={0} y={0} width={24} height={24} />
                                 <circle fill="#000000" cx={12} cy={5} r={2} />
                                 <circle fill="#000000" cx={12} cy={12} r={2} />
                                 <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                           </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                           <Dropdown.Item className="dropdown-item" to="/">
                              View Detail
                           </Dropdown.Item>
                           <Dropdown.Item className="dropdown-item" to="/">
                              Edit
                           </Dropdown.Item>
                           <Dropdown.Item className="dropdown-item" to="/">
                              Delete
                           </Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
                  <div className="card-body timeline pb-2">
                     <div className="timeline-panel align-items-end">
                        <div className="media mr-3">
                           <img
                              src={avatar1}
                              className="rounded-circle"
                              alt="avatar1"
                              width={50}
                           />
                        </div>
                        <div className="media-body">
                           <h5 className="mb-1">
                              <Link className="text-black" to="app-profile">
                                 Olivia Johnson
                              </Link>
                           </h5>
                           <p className="d-block mb-0 text-primary">
                              <i className="las la-ticket-alt mr-2 scale5 ml-1" />
                              Height Performance conert 2020
                           </p>
                        </div>
                        <p className="mb-0 fs-14">2m ago</p>
                     </div>
                     <div className="timeline-panel align-items-end">
                        <div className="media mr-3">
                           <img
                              className="rounded-circle"
                              alt="avatar2"
                              width={50}
                              src={avatar2}
                           />
                        </div>
                        <div className="media-body">
                           <h5 className="mb-1">
                              <Link className="text-black" to="app-profile">
                                 Griezerman
                              </Link>
                           </h5>
                           <p className="d-block mb-0 text-primary">
                              <i className="las la-ticket-alt mr-2 scale5 ml-1" />
                              Fireworks Show New Year 2020
                           </p>
                        </div>
                        <p className="mb-0 fs-14">5m ago</p>
                     </div>
                     <div className="timeline-panel align-items-end">
                        <div className="media mr-3">
                           <img
                              className="rounded-circle"
                              alt="avatar3"
                              width={50}
                              src={avatar3}
                           />
                        </div>
                        <div className="media-body">
                           <h5 className="mb-1">
                              <Link className="text-black" to="/">
                                 Uli Trumb
                              </Link>
                           </h5>
                           <p className="d-block mb-0 text-primary">
                              <i className="las la-ticket-alt mr-2 scale5 ml-1" />
                              Height Performance conert 2020
                           </p>
                        </div>
                        <p className="mb-0  fs-14">8m ago</p>
                     </div>
                     <div className="timeline-panel align-items-end">
                        <div className="media mr-3">
                           <img
                              className="rounded-circle"
                              alt="avatar4"
                              width={50}
                              src={avatar4}
                           />
                        </div>
                        <div className="media-body">
                           <h5 className="mb-1">
                              <Link className="text-black" to="app-profile">
                                 Oconner
                              </Link>
                           </h5>
                           <p className="d-block mb-0 text-primary">
                              <i className="las la-ticket-alt mr-2 scale5 ml-1" />
                              Fireworks Show New Year 2020
                           </p>
                        </div>
                        <p className="mb-0 fs-14">12m ago</p>
                     </div>
                  </div>
                  <div className="card-footer border-0 pt-0 text-center">
                     <Link to="customer-list" className="btn-link">
                        View more{" "}
                        <i className="fa fa-angle-down ml-2 scale-2" />
                     </Link>
                  </div>
               </div>
            </div>
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row mx-0">
                        <div className="col-sm-12 col-lg-4 px-0">
                           <h2 className="fs-40 text-black font-w600">
                              862,441{" "}
                              <small className="fs-18 ml-2 font-w600 mb-1">
                                 pcs
                              </small>
                           </h2>
                           <p className="font-w100 fs-20 text-black">
                              Ticket Sold Today
                           </p>
                           <div className="justify-content-between border-0 d-flex fs-14 align-items-end">
                              <Link to="/" className="text-primary">
                                 View more{" "}
                                 <i className="las la-long-arrow-alt-right scale5 ml-2" />
                              </Link>
                              <div className="text-right">
                                 <svg className="peity" height={50} width={80}>
                                    <polygon
                                       fill="rgba(33, 48, 184, .2)"
                                       points="0 48 0 48 26.666666666666668 25 53.333333333333336 36.5 80 2 80 48"
                                    />
                                    <polyline
                                       fill="none"
                                       points="0 48 26.666666666666668 25 53.333333333333336 36.5 80 2"
                                       stroke="#2130b8"
                                       strokeWidth={4}
                                       strokeLinecap="square"
                                    />
                                 </svg>

                                 <h3 className="mt-2 mb-1">+4%</h3>
                                 <span>than last day</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-12 col-lg-8 px-0">
                           {/* <canvas id="ticketSold" height={200} /> */}
                           <BarChart7 />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
