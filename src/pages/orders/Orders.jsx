import React from "react";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? "Seller" : "Buyer"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src="img/pattern.jpg" className="image" alt="" />
            </td>
            <td>Product 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <i className="fa-solid fa-address-card"></i>
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
              <i className="fa-solid fa-address-card"></i>
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
              <i className="fa-solid fa-address-card"></i>
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
              <i className="fa-solid fa-address-card"></i>
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
              <i className="fa-solid fa-address-card"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
