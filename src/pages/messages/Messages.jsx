import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  const data = {
    buyer: "Mesreval Ent.",
    date: "2023/08/12",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur magnam sed aperiam eveniet omnis odio repudiandae, minus quod ducimus, ab quaerat vero aliquam natus nihil veritatis molestias. Quibusdam, perferendis?`,
  };

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">
                {data.message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 days ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>{data.buyer}</td>
            <td>
              <Link className="link" to="/message/123">
                {data.message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 week ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>{data.buyer}</td>
            <td>
              <Link className="link" to="/message/123">
                {data.message.substring(0, 100)}...
              </Link>
            </td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td>{data.buyer}</td>
            <td>
              <Link className="link" to="/message/123">
                {data.message.substring(0, 100)}...
              </Link>
            </td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td>{data.buyer}</td>
            <td>
              <Link className="link" to="/message/123">
                {data.message.substring(0, 100)}...
              </Link>
            </td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td>{data.buyer}</td>
            <td>
              <Link className="link" to="/message/123">
                {data.message.substring(0, 100)}...
              </Link>
            </td>
            <td>{data.date}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
