import './styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { WithReact } from "./pages/WithReact";
import { LoadData } from "./pages/LoadData";
import { VegaLitePlot } from "./pages/VegaLitePlot";
import { WorldAtlas } from "./pages/WorldAtlas";

const App = () => (
  <Router>
    <Routes>
      {/* <Route index element={<Home />} />  */}
      <Route path="/load-data" element={<LoadData />} />
      <Route path="/interact-with-react" element={<WithReact />} />
      <Route path="/vega-lite-plot" element={<VegaLitePlot />} />
      <Route path="/world-atlas" element={<WorldAtlas />} />
      
    </Routes>
  </Router>
)

export default App

