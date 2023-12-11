import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className="link" to="/messages">
            MESSAGES
          </Link>
          - JOHN DOE -
        </span>
        <div className="messages">
          <div className="item">
            <img src="/img/bg.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facilis illo blanditiis modi qui ullam vel aperiam veniam,
              assumenda maiores. A mollitia earum nobis expedita veniam
              exercitationem aperiam placeat debitis!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/pattern.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facilis illo blanditiis modi qui ullam vel aperiam veniam,
              assumenda maiores. A mollitia earum nobis expedita veniam
              exercitationem aperiam placeat debitis!
            </p>
          </div>
          <div className="item">
            <img src="/img/bg.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facilis illo blanditiis modi qui ullam vel aperiam veniam,
              assumenda maiores. A mollitia earum nobis expedita veniam
              exercitationem aperiam placeat debitis!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/pattern.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facilis illo blanditiis modi qui ullam vel aperiam veniam,
              assumenda maiores. A mollitia earum nobis expedita veniam
              exercitationem aperiam placeat debitis!
            </p>
          </div>
          <div className="item">
            <img src="/img/bg.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facilis illo blanditiis modi qui ullam vel aperiam veniam,
              assumenda maiores. A mollitia earum nobis expedita veniam
              exercitationem aperiam placeat debitis!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/pattern.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facilis illo blanditiis modi qui ullam vel aperiam veniam,
              assumenda maiores. A mollitia earum nobis expedita veniam
              exercitationem aperiam placeat debitis!
            </p>
          </div>
          <div className="item">
            <img src="/img/bg.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facilis illo blanditiis modi qui ullam vel aperiam veniam,
              assumenda maiores. A mollitia earum nobis expedita veniam
              exercitationem aperiam placeat debitis!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/pattern.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facilis illo blanditiis modi qui ullam vel aperiam veniam,
              assumenda maiores. A mollitia earum nobis expedita veniam
              exercitationem aperiam placeat debitis!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="write your message..."
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
