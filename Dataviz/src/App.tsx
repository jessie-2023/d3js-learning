
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AboutFetch } from "./pages/AboutFetch";
import { WithReact } from "./pages/WithReact";

const App = () => (
  <Router>
    <Routes>
      {/* <Route index element={<Home />} />  */}
      <Route path="/about-fetch" element={<AboutFetch />} />
      <Route path="/interact-with-react" element={<WithReact />} />
      
    </Routes>
  </Router>
)

export default App

