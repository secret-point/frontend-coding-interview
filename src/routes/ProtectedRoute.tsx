import { Navigate, useLocation } from "react-router-dom";
import { isAuthed } from "../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const location = useLocation();
  if (!isAuthed()) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}
