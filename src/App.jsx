import { Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Error from "./components/pages/Error";
import Login from "./components/pages/Login";
import DashboardHome from "./components/pages/DashboardHome";
import DashboardMessage from "./components/pages/DashboardMessage";
import DashboardNotifications from "./components/pages/DashboardNotifications";
import DashboardSettings from "./components/pages/DashboardSettings";
import DashboardLogout from "./components/pages/DashboardLogout";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route path="/dashboard" element={<RootLayout />}>
          <Route path="home" element={<DashboardHome />}></Route>
          <Route path="message" element={<DashboardMessage />}></Route>
          <Route path="notifications" element={<DashboardNotifications />}></Route>
          <Route path="settings" element={<DashboardSettings />}></Route>
          <Route path="logout" element={<DashboardLogout />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
