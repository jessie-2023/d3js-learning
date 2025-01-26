
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { WithReact } from "./pages/WithReact";
import { LoadData } from "./pages/LoadData";

const App = () => (
  <Router>
    <Routes>
      {/* <Route index element={<Home />} />  */}
      <Route path="/load-data" element={<LoadData />} />
      <Route path="/interact-with-react" element={<WithReact />} />
      
    </Routes>
  </Router>
)

export default App

