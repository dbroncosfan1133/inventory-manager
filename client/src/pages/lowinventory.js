import React from "react";
import BackButton from "../components/backbutton/backbutton";
import HeroMain from "../components/heromain/heromain";
import Footer from "../components/footer/footer";
import AddItemBtn from "../components/additembtn/additembtn";
import AddInventBtn from "../components/addinventorybtn/addinventbtn";
import SubInventBtn from "../components/subinventbtn/subinventbtn";
import LowInventView from "../components/lowinventbl/lowinventbl";
import "./pages.css";

function LowPage() {
  return (
    <div>
      <HeroMain />
      <div className="container mainContain">
        <div className="card">
          <div className="card-title">
            <h1 className="is-size-1">Low Inventory</h1>
            <hr />
          </div>
          <div className="columns is-multiline">
            <div className="column is-8">
              <div className="container">
                <LowInventView />
              </div>
            </div>
            <div className="column is-4">
              <ul>
                <li className="buttonLayout">
                  <AddInventBtn />
                </li>
                <li className="buttonLayout">
                  <SubInventBtn />
                </li>
                <li className="buttonLayout">
                  <AddItemBtn />
                </li>
                <li className="buttonLayout">
                  <BackButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LowPage;