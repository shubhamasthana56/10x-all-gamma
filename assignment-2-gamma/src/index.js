import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './test';
const root = ReactDOM.createRoot(document.getElementById('root'));
const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  
root.render(
    <Test/>
);
