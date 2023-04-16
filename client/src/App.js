import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./pages/Record/recordList";
import Edit from "./pages/Record/edit";
import Create from "./pages/Record/create";
import Register from "./pages/Record/register";
 
const App = () => {
 return (
   <div className="App">
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/register" element={<Register />} />
     </Routes>
   </div>
 );
};
 
export default App;