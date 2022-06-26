import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl text-blue-600 font-bold underline">
        Hello world!
      </h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
