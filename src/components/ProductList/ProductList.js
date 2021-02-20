import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="alert alert-danger">Danh sach san pham</div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">MA</th>
              <th scope="col">TEN</th>
              <th scope="col">GIA</th>
              <th scope="col">Trang thai</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <ProductItem />
        </table>
      </div>
    );
  }
}

export default ProductList;
