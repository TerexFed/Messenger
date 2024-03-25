import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registration";
import Messenger from "./components/messenger";
import Error from "./components/error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/messenger" element={<Messenger />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
