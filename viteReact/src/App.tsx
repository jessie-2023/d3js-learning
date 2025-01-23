
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThreeFaces } from './page/threeFaces'
import { Home } from "./page/Home"
import { RandomFaces } from "./page/RandomFaces"


export const App = () => (
  <Router>
    <Routes>
      <Route index element={<Home />} /> 
      <Route path="/three-faces" element={<ThreeFaces />} />
      <Route path="/random-faces" element={<RandomFaces />} />
    </Routes>
  </Router>
)


