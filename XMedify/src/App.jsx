import Home from "../src/home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvailableCentersPage from "./availableCentersPage";
import MyBookingsHomePage from "./myBookingsPage";
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/availableCentersPage" element={<AvailableCentersPage />} />
          <Route path="/my-bookings" element={<MyBookingsHomePage />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;