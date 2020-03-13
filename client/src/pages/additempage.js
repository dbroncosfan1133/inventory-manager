import React, { Component } from "react";
import { Input, FormBtn } from "../components/form/form";

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

    ////////////////////////////// Need API calls to Database//////////////////////////////
    // componentDidMount() {
    //     this.loadItems();
    //   }

    //   loadItems = () => {
    //     API.getItems()
    //       .then(res =>
    //         this.setState({ items: res.data, description: "", itemNumber: "", quantity: "",
    //                         size: "", cost: "", salePrice: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //         API.saveBook({
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
            <div className="container">
                <div className="header">
                    <h1>Enter a New Product</h1>
                </div>
                <hr />
                <div>
                    <form>
                        <Input
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                            placeholder="Item Description (required)"
                        />
                        <Input
                            value={this.state.itemNumber}
                            onChange={this.handleInputChange}
                            name="itemNumber"
                            placeholder="Item Number (required)"
                        />
                        <Input
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                            name="quantity"
                            placeholder="Quantity on hand (required)"
                        />
                        <Input
                            value={this.state.size}
                            onChange={this.handleInputChange}
                            name="size"
                            placeholder="Size"
                        />
                        <Input
                            value={this.state.cost}
                            onChange={this.handleInputChange}
                            name="cost"
                            placeholder="Cost (required)"
                        />
                        <Input
                            value={this.state.salePrice}
                            onChange={this.handleInputChange}
                            name="salePrice"
                            placeholder="Sale Price (required)"
                        />
                        <FormBtn
                            disabled={!(this.state.description && this.state.itemNumber
                                && this.state.quantity && this.state.cost && this.state.salePrice)}
                            onClick={this.handleFormSubmit}
                        >
                            Submit Item
                        </FormBtn>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddNewItem;