import { Routes, Route } from "react-router-dom";
import Components from "./routes/Components";
import Home from "./routes/Home";
import Login from "./routes/sessions/Login";
import Profile from "./routes/Profile";
import EditProfile from "./routes/EditProfile";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/edit" element={<EditProfile />} />
      <Route path={"components"} element={<Components />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
