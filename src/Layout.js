import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link active color" aria-current="page">
            權限管理
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/From" className="nav-link active" aria-current="page">
            資料處理
          </Link>
        </li>
      </ul>
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
