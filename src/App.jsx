import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfriTekbileLanding from "./Pages/Home";
import AuthScreen from "./components/auth";

export default function App () {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthScreen/>}/>
      <Route path="/home" element={<AfriTekbileLanding/>}/>
    </Routes>
    </BrowserRouter>
  );
}