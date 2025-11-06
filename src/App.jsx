import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
