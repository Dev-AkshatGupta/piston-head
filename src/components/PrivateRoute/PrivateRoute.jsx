import { Navigate, useLocation } from "react-router-dom";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
function PrivateRoute({ children }) {
  const {
    authState: { token },
  } = useAuthorization();
  const location = useLocation();

  return token ? (
    { children }
  ) : (
    <Navigate to="/logIn-page" state={{ from: location }} replace />
  );
}
export { PrivateRoute };
