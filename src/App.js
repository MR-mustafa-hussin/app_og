import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.jsx";
import Booking from "./Pages/Booking/Booking.jsx";
import OurTeam from "./Pages/Our Team/Our Team.jsx";
import Faqs from "./Pages/Faq's/Faq's";
import Error from "./Pages/Error/Error.jsx";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import ServicesDetails from "./Pages/ServicesDetails/ServicesDetails.jsx";
import img from "./Assets/about 2.jpg";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import BlogsDetails from "./Pages/BlogsDetails/BlogsDetails.jsx";
import Search from "./Components/Search/Search";



let BrowserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route index path="/aboutUs" element={<About />} />
      <Route index path="/Booking" element={<Booking />} />
      <Route index path="/ourTeam" element={<OurTeam />} />
      <Route index path="/faqs" element={<Faqs />} />
      <Route index path="/error" element={<Error />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
 <Route  path="/servicesDetails" element={<ServicesDetails />} />
 <Route  path="/blogs" element={<Blogs />} />
 <Route  path="/blogDetails" element={<BlogsDetails />} />
 <Route  path="/search" element={<Search/>} />
    </Route>
  )
);
function App() {

  return (
    <>
   <RouterProvider router={BrowserRouter} />
    </>
  );
}

export default App;

