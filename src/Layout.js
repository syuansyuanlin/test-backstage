import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.cloudinfo.com.tw/wp-content/uploads/2019/01/cloudinfologo-black1.png"
              alt=""
              width="200"
            />
          </a>
        </div>
      </nav>
      <div style={{ backgroundColor: "#FBF9F1" }}>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              style={{ color: "#7D0A0A" }}
              to="/"
              className="nav-link active color"
            >
              權限管理
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ color: "#7D0A0A" }}
              to="/From"
              className="nav-link active"
            >
              資料處理
            </Link>
          </li>
        </ul>
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">權限管理</Link>
          </li>
          <li>
            <Link to="/From">資料處理</Link>
          </li>
        </ul>
      </nav> */}
      <Outlet />
    </>
  );
};

export default Layout;
