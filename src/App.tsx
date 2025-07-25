import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Photos from "./pages/Photos";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./App.css";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/photos"
        element={
          <ProtectedRoute>
            <Layout>
              <Photos />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
}
