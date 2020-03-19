import React from "react";
import BackButton from "../components/backbutton/backbutton";
import HeroMain from "../components/heromain/heromain";
// import Footer from "../components/footer/footer";
import AddItemBtn from "../components/additembtn/additembtn";
import AddInventBtn from "../components/addinventorybtn/addinventbtn";
import SubInventBtn from "../components/subinventbtn/subinventbtn";
import App from "../components/inventorytable/inventorytable";
import "./pages.css"

function InventoryPage() {
  return (
    <div>
      <HeroMain />
      <div className="container mainContain">
        <div className="card">
          <div className="card-title">
            <h1 className="is-size-1">View Inventory</h1>
            <hr />
          </div>
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="section">
                <div className="container">
                  <App />
                </div>
              </div>
            </div>
            <div className="column is-3">
              <div className="field is-grouped">
                <p className="control">
                  <AddInventBtn />
                </p>
                <p className="control">
                  <AddItemBtn />
                </p>
              </div>
              <div className="column is-3">
                <div className="field is-grouped">
                  <p className="control">
                    <SubInventBtn />
                  </p>
                  <p className="control">
                    <BackButton />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventoryPage;