import React, { Component } from "react";
import HeroMain from "../components/heromain/heromain";
import { Input, FormBtn } from "../components/form/form";
import BackButton from "../components/backbutton/backbutton";
import Footer from "../components/footer/footer";

class AddNewItem extends Component {
  state = {
    items: [],
    itemNumber: "",
    quantity: "",
    description: "",
    size: "",
    upcCode: "",
    salonEach: "",
    extended: "",
    category: ""
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
      <div className="wrapper">
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
                  <h1 className="is-size-6">Item Number:</h1>
                  <Input
                    value={this.state.itemNumber}
                    onChange={this.handleInputChange}
                    name="itemNumber"
                    placeholder="Item Number (required)"
                  />
                  <h1 className="is-size-6">Quantity:</h1>
                  <Input
                    value={this.state.quantity}
                    onChange={this.handleInputChange}
                    name="quantity"
                    placeholder="Quantity(required)"
                  />
                  <h1 className="is-size-6">Description:</h1>
                  <Input
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Description (required)"
                  />
                  <h1 className="is-size-6">Size:</h1>
                  <Input
                    value={this.state.size}
                    onChange={this.handleInputChange}
                    name="size"
                    placeholder="Size (required)"
                  />
                  <h1 className="is-size-6">UPC Code:</h1>
                  <Input
                    value={this.state.upcCode}
                    onChange={this.handleInputChange}
                    name="upcCode"
                    placeholder="UPC Code (required)"
                  />
                  <h1 className="is-size-6">Sale Price:</h1>
                  <Input
                    value={this.state.salonEach}
                    onChange={this.handleInputChange}
                    name="salonEach"
                    placeholder="Salon Each (required)"
                  />
                  <h1 className="is-size-6">Extended:</h1>
                  <Input
                    value={this.state.extended}
                    onChange={this.handleInputChange}
                    name="extended"
                    placeholder="Extended (required)"
                  />
                  <h1 className="is-size-6">Category:</h1>
                  <Input
                    value={this.state.category}
                    onChange={this.handleInputChange}
                    name="category"
                    placeholder="Category (required)"
                  />
                  <div className="field is-grouped">
                    <p className="control">
                      <FormBtn
                        disabled={!(this.state.itemNumber && this.state.quantity
                          && this.state.description && this.state.size && this.state.upcCode
                          && this.state.salonEach && this.state.extended && this.state.category)}
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