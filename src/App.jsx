import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfriTekbileLanding from "./Pages/Home";
import AuthScreen from "./components/auth";
import Dashboard from "./components/dashboard";

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
