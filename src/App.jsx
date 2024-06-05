import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";
import Invoice from "./pages/Invoice";

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/invoice" element={<Invoice />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/update-password" element={<UpdatePassword />} />
          </Routes>
        </div>
      </Container>
    </>
  );
};

export default App;
