import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <GlobalStyles />
    </div>
  );
}

export default App;
