import React from "react";
import BackButton from "../components/backbutton/backbutton";
import { Input, FormBtn } from "../components/form/form";
import HeroMain from "../components/heromain/heromain";
import Footer from "../components/footer/footer";
import "./pages.css"
import API from "../utils/API"


class SubPage extends React.Component {
  state = {
    inventory: [],
    itemNumber: "",
    subtract: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  }
    handleFormSubmit = event => {
      // event.preventDefault();
      if (this.state.itemNumber && this.state.subtract) {
        API.changeInventory({
          itemNumber: this.state.itemNumber,
          subtract: this.state.subtract
        })
          .then(res => this.viewInventory())
          .catch(err => console.log(err));
      }
    };

  render() {
    return (
      <div>
        <HeroMain />
        <div className="container mainContain">
          <div className="columns">
            <div className="column is-12">
              <div className="card">
                <div className="card-title">
                  <h1 className="is-size-2">Subtract Inventory</h1>
                </div>
                <div className="card-body">
                  <form>
                    <h1 className="is-size-5">Item Number:</h1>
                    <Input
                      value={this.state.itemNumber}
                      onChange={this.handleInputChange}
                      name="itemNumber"
                      placeholder="Item Number (required)"
                    />
                    <h1 className="is-size-5">Grams Used:</h1>
                    <Input
                      value={this.state.subtract}
                      onChange={this.handleInputChange}
                      name="subtract"
                      placeholder="Grams Used (required)"
                    />
                    <div className="field is-grouped">
                      <p className="control">
                        <FormBtn
                          disabled={!(this.state.subtract && this.state.itemNumber)}
                          onClick={this.handleFormSubmit}
                        >
                          Submit
                        </FormBtn>
                      </p>
                      <p className="control">
                        <BackButton />
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default SubPage;