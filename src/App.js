import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Layout,
  Home,
  About,
  Blog,
  Policy,
  Contact,
  Service,
  Single_Blog,
  Single_Service,
  Courses,
  Single_Course,
  Course_Form,
  Not_Found,
} from "./comps/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blog" element={<Single_Blog />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:service" element={<Single_Service />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:course" element={<Single_Course />} />
          <Route path="/courses/register-form" element={<Course_Form />} />
          <Route path="*" element={<Not_Found />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
