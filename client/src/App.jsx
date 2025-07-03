import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import AuthLogin from "./pages/auth/login";
import AdminLayout from "./components/admin-view/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        {/* Common component */}
        <h1>Header Component</h1>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="loin" element={<AuthLogin/>} />
            <Route path="rgister" element={<AuthRegister/>} />
          </Route>
          <Route path="/admin" element={<AdminLayout/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

