import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import { UserSignUp } from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";

import GetUser from "./pages/GetUser";
import { UserHome } from "./pages/UserHome";
import ChooseVehicle from "./pages/ChooseVehicle";
import Riding from "./pages/Riding";
import CaptainHome from "./pages/CaptainHome";
import CaptainAcceptRide from "./pages/CaptainAcceptRide";
import CaptainConfirmRide from "./pages/CaptainConfirmRide";
import CaptainRiding from "./pages/CaptainRiding";
import Finish from "./pages/Finish";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/getuser" element={<GetUser />} />
        <Route path="/vehicle" element={<ChooseVehicle />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="captain" element={<CaptainHome />} />
        <Route path="accept-ride" element={<CaptainAcceptRide />} />
        <Route path="confirm-ride" element={<CaptainConfirmRide />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
};

export default App;
