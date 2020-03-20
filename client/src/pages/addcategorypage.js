import React, { Component } from "react";
import HeroMain from "../components/heromain/heromain";
import { Input, FormBtn } from "../components/form/form";
import BackButton from "../components/backbutton/backbutton";

class AddNewCategory extends Component {
  state = {
    items: [],
    category: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.description && this.state.itemNumber && this.state.quantity && this.state.cost && this.state.salePrice) {
  //         API.??????????({
  //             description: this.state.description,
  //             itemNumber: this.state.itemNumber,
  //             quantity: this.state.quantity,
  //             size: this.state.size,
  //             cost: this.state.cost,
  //             salePrice: this.state.salePrice
  //         })
  //             .then(res => this.loadItems())
  //             .catch(err => console.log(err));
  //     }
  // };

  render() {
    return (
      <div>
        <HeroMain />
        <div>
          <br />
        </div>
        <div className="container">
          <div className="card">
            <div className="card-title">
              <h1 className="is-size-2">Enter a New Category</h1>
              <hr />
            </div>
            <div className="card-body">
              <form>
                <h1 className="is-size-5">New Category:</h1>
                <Input
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  name="category"
                  placeholder="New Category (required)"
                />
                <div className="field is-grouped">
                  <p className="control">
                    <FormBtn
                      disabled={!(this.state.category)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Item
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
    )
  }
}

export default AddNewCategory;