import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Layout,
  Home,
  About,
  Blog,
  Contact,
  Single_Blog,
  Courses,
  Single_Course,
  Course_Form,
  Not_Found,
  Rules,
  Single_Rule,
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Rules />} />
          <Route path="/policy/:rule" element={<Single_Rule />} />
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
