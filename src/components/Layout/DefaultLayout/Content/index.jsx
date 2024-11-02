// src/Layout/DefaultLayout/content/index.jsx
import React from 'react';
import '/src/styles/contentStyles.css';


const Content = () => {
    return (
      <div className='content-container'>
   
        <table className='table'>
          <thead>
            <tr>
              <th>Khoa</th>
              <th>Tên Môn</th>
              <th>Số Lượng Lớp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Khoa CNTT</td>
              <td>LẬP TRÌNH PYTHON</td>
              <td>5</td>
              <td><button>Xem</button></td>
            </tr>
            {/* Có thể thêm các dòng khác nếu cần */}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Content;