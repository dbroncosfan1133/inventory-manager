import React from "react";
import MainPage from "./pages/mainpage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InventoryPage from "./pages/viewinventory";
import LowPage from "./pages/lowinventory";
import AddPage from "./pages/addpage";
import SubPage from "./pages/subpage";
import Login from "./pages/loginpage";

import './App.css';

 function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/viewinventory" component={InventoryPage} />
          <Route exact path="/lowinventory" component={LowPage} />
          {/* <Route exact path="/addnewitem" component={AddItemPage} />
          <Route exact path="/addnewcategory" component={AddCategoryPage} /> */}
          <Route exact path="/add" component={AddPage} />
          <Route exact path="/subtract" component={SubPage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;
