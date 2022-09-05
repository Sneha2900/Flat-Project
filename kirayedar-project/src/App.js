import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./Component/Head";
import DashboardPage from "./Component/Pages/DashboardPage";
import LoginPage from "./Component/Pages/LoginPage";
import SignupPage from "./Component/Pages/SignupPage";
import TransactionPage from "./Component/Pages/TransactionPage";
import AddFlat from "./Component/AddFlat";
import AddPayment from "./Component/AddPayment";
import AddRent from "./Component/AddRent";

function App() {
  return (
    <>
      <Head />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="transaction/:flatId" element={<TransactionPage />} />
          <Route path="addflat" element={<AddFlat />} />
          <Route path="addpayment" element={<AddPayment />} />
          <Route path="addrent" element={<AddRent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
