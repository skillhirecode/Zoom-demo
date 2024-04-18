import React, { useState } from "react";
import './Dashboard.css';

const Dashboard =()=>{
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        
        <div
          className={`col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar ${
            isSidebarOpen ? "" : "collapsed"
          }`}
          id="sidebar"
        >
          <h1 className="bi bi-bootstrap text-primary d-flex my-4 justify-content-center"></h1>
          <div className="list-group rounded-0">
            <a
              href="#"
              className="list-group-item list-group-item-action active border-0 d-flex align-items-center"
            >
              <span className="bi bi-border-all"></span>
              <span className="ml-2">Dashboard</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action border-0 align-items-center"
            >
              <span className="bi bi-box"></span>
              <span className="ml-2">Products</span>
            </a>

            <button
              className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
              data-toggle="collapse"
              data-target="#sale-collapse"
            >
              <div>
                <span className="bi bi-cart-dash"></span>
                <span className="ml-2">Sales</span>
              </div>
              <span className="bi bi-chevron-down small"></span>
            </button>
            <div
              className="collapse"
              id="sale-collapse"
              data-parent="#sidebar"
            >
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-0 pl-5"
                >
                  Customers
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-0 pl-5"
                >
                  Sale Orders
                </a>
              </div>
            </div>

            <button
              className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
              data-toggle="collapse"
              data-target="#purchase-collapse"
            >
              <div>
                <span className="bi bi-cart-plus"></span>
                <span className="ml-2">Purchase</span>
              </div>
              <span className="bi bi-chevron-down small"></span>
            </button>
            <div
              className="collapse"
              id="purchase-collapse"
              data-parent="#sidebar"
            >
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-0 pl-5"
                >
                  Sellers
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-0 pl-5"
                >
                  Purchase Orders
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* overlay to close sidebar on small screens */}
        <div
          className={`w-100 vh-100 position-fixed overlay d-none ${
            isSidebarOpen ? "d-none" : ""
          }`}
          id="sidebar-overlay"
          onClick={toggleSidebar}
        ></div>
        {/* main content */}
        <div className="col-md-9 col-lg-10 ml-md-auto px-0">
          <div className="topbar d-flex align-items-center justify-content-between">
            <button className="btn btn-light" onClick={toggleSidebar}>
              <span className="bi bi-list"></span>
            </button>
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="bi bi-person-circle"></span>
                <span className="ml-2">Profile</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h1 className="mb-5">Dashboard</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;