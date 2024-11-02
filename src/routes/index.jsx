import React from 'react';
import Login from '../components/Login'; // Đảm bảo đường dẫn đúng

import Home from '../components/Home';
import Monhoc from '../components/Monhoc';
import Lophoc from '../components/Lophoc';
import Khoahoc from '../components/Khoahoc';

const publicRoutes = [
  { path: '/home', element: <Home /> },
  { path: '/login', element: <Login /> }, // Không sử dụng layout
  { path: '/', element: <Home /> }, // Thêm route cho '/'
  { path: '/monhoc', element: <Monhoc /> },
  { path: '/lophoc', element: <Lophoc /> },
  { path: '/khoahoc', element: <Khoahoc /> },
];

export { publicRoutes };
