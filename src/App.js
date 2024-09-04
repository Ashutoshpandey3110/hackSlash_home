import { Route, Router , Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
<link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" ref=" stylesheets "/>


// @import url('');




function App() {
  return (
     <div className=" flex flex-col  ">
      

      <Routes>

        <Route path="/" element={<Home></Home>}>

        </Route>
      </Routes>
      
      
       </div>
  );
}

export default App;
