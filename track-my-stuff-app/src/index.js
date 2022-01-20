import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styling/index.css';
import App from './pages/App';
import AddPage from './pages/AddPage';
import GetAllPage from './pages/GetAllPage';
import GetItemPage from './pages/GetItemPage';
import reportWebVitals from './resources/reportWebVitals';

const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route path="" element={<App/>} />
                <Route path="/add" element={<AddPage/>} />
                <Route path="/items" element={<GetAllPage/>} />
                <Route path="items/:id" element={<GetItemPage/>} />
            </Routes>
        </Router>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
