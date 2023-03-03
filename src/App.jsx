import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Profile from "./routes/Profile"

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}

export default App
