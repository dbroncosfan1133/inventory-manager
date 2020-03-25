import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainpage";
import InventoryPage from "./pages/viewinventory";
import LowPage from "./pages/lowinventory";
import AddPage from "./pages/addpage";
import SubPage from "./pages/subpage";
import Login from "./pages/loginpage";
import AddNewItem from "./pages/additempage";
import AddCategoryPage from "./pages/addcategorypage";



import './App.css';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/viewinventory" component={InventoryPage} />
          <Route exact path="/lowinventory" component={LowPage} />
          <Route exact path="/additempage" component={AddNewItem} />
          <Route exact path="/addnewcategory" component={AddCategoryPage} />
          <Route exact path="/add" component={AddPage} />
          <Route exact path="/subtract" component={SubPage} />
          <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
  )
}
export default App;
