import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({ children }) {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/login" />;
}

MyRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
