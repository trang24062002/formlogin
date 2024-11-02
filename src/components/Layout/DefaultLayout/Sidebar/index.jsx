// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebarStyles.css'; // Import file CSS nếu cần

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/monhoc">MÔN HỌC</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/khoahoc">KHOA HỌC</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/lophoc">LỚP HỌC</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
