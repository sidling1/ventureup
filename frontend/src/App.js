import React , { Fragment } from "react";
import Init from "./Components/Init";
import Signup from "./Components/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/Login";
import Home from "./Components/Home";
import { EditProfile } from "./Components/Profile";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/profile-edit" element={<EditProfile/>}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
