import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function MyRoute({ children }) {
  const logged = useSelector((state) => state.logado);

  return logged ? children : <Navigate to="/login" />;
}

MyRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
