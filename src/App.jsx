import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfriTekbileLanding from "./Pages/Home";
import AuthScreen from "./Pages/auth";
import Dashboard from "./Client_Dashboard/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthScreen />} />
        <Route path="/" element={<AfriTekbileLanding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
