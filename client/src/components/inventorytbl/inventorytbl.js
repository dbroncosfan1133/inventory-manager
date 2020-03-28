import React from "react";
import API from "../../utils/API";

class InventoryView extends React.Component {
    state = {
        currentInventory: []
    };

    componentDidMount() {
        this.getInventory();
        console.log(this.state);
    }

    getInventory = () => {
        API.getAllInventory()
            .then(res =>
                this.setState({ currentInventory: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className="table-container">
                    <table className="table is-bordered is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>Item Number</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th>Size</th>
                                <th>Salon Each</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Item Number</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th>Size</th>
                                <th>Salon Each</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <td>
                                {this.state.currentInventory.map(invent => (
                                    <div className="is-size-6">
                                        {invent["Item Number"]}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {this.state.currentInventory.map(invent => (
                                    <div className="is-size-6">
                                        {invent.Quantity}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {this.state.currentInventory.map(invent => (
                                    <div className="is-size-6">
                                        {invent.Description}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {this.state.currentInventory.map(invent => (
                                    <div className="is-size-6">
                                        {invent.Size}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {this.state.currentInventory.map(invent => (
                                    <div className="is-size-6">
                                        {invent["Salon Each"]}
                                    </div>
                                ))}
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default InventoryView;