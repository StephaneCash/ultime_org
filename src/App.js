import { ToastContainer } from "react-toastify";
import RoutesFree from "./componentRoutes/RoutesFree";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <RoutesFree />
      <ToastContainer />
    </div>
  );
}

export default App;
