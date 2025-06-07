import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import ForgetPassword from "./pages/ForgetPassword";
import EmailCheck from "./pages/EmailCheck";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import ConfirmPassword from "./pages/ConfirmPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/email-check" element={<EmailCheck />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/confirmpassword" element={<ConfirmPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
