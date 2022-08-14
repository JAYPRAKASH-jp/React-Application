import "./App.css";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PlaceAppointment from "./Components/PlaceAppointment";
import ViewAppointment from "./Components/ViewAppointment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={ <Home/>} />
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/placeappointment" element={ <PlaceAppointment/>} />
            <Route exact path="/contact" element={  <ContactUs />} />
            <Route exact path="/viewappointment" element={<ViewAppointment/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
