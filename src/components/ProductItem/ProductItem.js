import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <tr>
        <th scope="row">1</th>
        <td>11</td>
        <td>Otto</td>
        <td>$123</td>
        <td>
          <button className="btn btn-success">Con hang</button>
        </td>
        <td>
          <button className="btn btn-success">Sua</button>
          <button className="btn btn-danger">Xoa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
