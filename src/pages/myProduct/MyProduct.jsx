// import React from 'react'
import { Link } from "react-router-dom";
import "./MyProduct.scss";

const MyProduct = () => {
  return (
    <div className="myproduct">
      <div className="container">
        <div className="title">
          <h1>Products</h1>
          <Link to="/add" className="link">
            Add new Product
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src="img/pattern.jpg" className="image" alt="" />
            </td>
            <td>Product 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="img/pattern.jpg" className="image" alt="" />
            </td>
            <td>Product 2</td>
            <td>679</td>
            <td>15000</td>
            <td>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="img/pattern.jpg" className="image" alt="" />
            </td>
            <td>Product 3</td>
            <td>45</td>
            <td>22000</td>
            <td>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="img/pattern.jpg" className="image" alt="" />
            </td>
            <td>Product 4</td>
            <td>67</td>
            <td>19000</td>
            <td>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="img/pattern.jpg" className="image" alt="" />
            </td>
            <td>Product 5</td>
            <td>23</td>
            <td>16000</td>
            <td>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
