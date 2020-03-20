import React, { Component } from "react";
import HeroMain from "../components/heromain/heromain";
import { Input, FormBtn } from "../components/form/form";
import BackButton from "../components/backbutton/backbutton";
import Footer from "../components/footer/footer";

class AddNewItem extends Component {
  state = {
    items: [],
    description: "",
    itemNumber: "",
    quantity: "",
    size: "",
    cost: "",
    salePrice: ""
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
          <div className="container">
            <div className="card">
              <div className="card-title">
                <h1 className="is-size-2">Enter a New Product</h1>
                <hr />
              </div>
              <div className="card-body">
                <form>
                  <h1 className="is-size-5">Item Description:</h1>
                  <Input
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Item Description (required)"
                  />
                  <h1 className="is-size-5">Item Number:</h1>
                  <Input
                    value={this.state.itemNumber}
                    onChange={this.handleInputChange}
                    name="itemNumber"
                    placeholder="Item Number (required)"
                  />
                  <h1 className="is-size-5">Quantity:</h1>
                  <Input
                    value={this.state.quantity}
                    onChange={this.handleInputChange}
                    name="quantity"
                    placeholder="Quantity on hand (required)"
                  />
                  <h1 className="is-size-5">Size:</h1>
                  <Input
                    value={this.state.size}
                    onChange={this.handleInputChange}
                    name="size"
                    placeholder="Size"
                  />
                  <h1 className="is-size-5">Cost:</h1>
                  <Input
                    value={this.state.cost}
                    onChange={this.handleInputChange}
                    name="cost"
                    placeholder="Cost (required)"
                  />
                  <h1 className="is-size-5">Sale Price:</h1>
                  <Input
                    value={this.state.salePrice}
                    onChange={this.handleInputChange}
                    name="salePrice"
                    placeholder="Sale Price (required)"
                  />
                  <div className="field is-grouped">
                    <p className="control">
                      <FormBtn
                        disabled={!(this.state.description && this.state.itemNumber
                          && this.state.quantity && this.state.cost && this.state.salePrice)}
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
       <Footer />
      </div>
    )
  }
}

export default AddNewItem;