import Home from "../src/home";
import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import AvailableCentersPage from "./availableCentersPage";
import MyBookingsHomePage from "./myBookingsPage";

function App() {
  return (
    <>
     <BrowserRouter>
     
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/availableCentersPage" Component={AvailableCentersPage} />
        <Route path="/myBookingsPage" Component={MyBookingsHomePage} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
