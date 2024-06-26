import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageTitle = ({ motherMenu, activeMenu }) => {
  return (
    <div className="page-titles">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="#">{motherMenu}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="#">{activeMenu}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default PageTitle;
