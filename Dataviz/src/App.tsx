
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AboutFetch } from "./pages/AboutFetch";

const App = () => (
  <Router>
    <Routes>
      {/* <Route index element={<Home />} />  */}
      <Route path="/about-fetch" element={<AboutFetch />} />
      
    </Routes>
  </Router>
)

export default App

