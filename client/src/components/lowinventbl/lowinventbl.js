import React from "react";
import API from "../../utils/API";

class LowInventView extends React.Component {
    state = {
        lowInventory: []
    };

    componentDidMount() {
        this.getLowInvent()
    }

    getLowInvent = () => {
        API.getLowInventory()
            .then(res =>
                this.setState({ lowInventory: res.data })
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
                                <th>Salon Each</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                {this.state.lowInventory.map(invent => (
                                    <div className="is-size-6">
                                        {invent["Item Number"]}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {this.state.lowInventory.map(invent => (
                                    <div className="is-size-6">
                                        {invent.Quantity}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {this.state.lowInventory.map(invent => (
                                    <div className="is-size-6">
                                        {invent.Description}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {this.state.lowInventory.map(invent => (
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

export default LowInventView;