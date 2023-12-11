// import React from 'react'
import Slider from "react-slick";
import "./Category.scss";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">ATOUTPRIX - GRAPHICS & DESIGN -</span>
          <h1>AI will generate an Art for you</h1>
          <div className="user">
            <img src="img/bg.jpg" className="pp" alt="" />
            <span>Abdoulaye Cisse</span>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <span>5</span>
            </div>
          </div>
          <div className="slider">
            <Slider slidesToShow={1} slidesToScroll={1} dots arrows>
              <img src="img/pexels1.jpg" alt="" />
              <img src="img/pexels2.jpg" alt="" />
              <img src="img/pexels3.jpg" alt="" />
            </Slider>
          </div>

          <h2>About this category</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, labore quas eveniet architecto repellat delectus at
            praesentium quaerat vitae itaque aliquid autem quod veritatis
            voluptas dolores asperiores numquam ex dolore fuga eos iusto, nobis
            cum. Eos delectus tenetur expedita sequi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur, labore quas eveniet
            architecto repellat delectus at praesentium quaerat vitae itaque
            aliquid autem quod veritatis voluptas dolores asperiores numquam ex
            dolore fuga eos iusto, nobis cum. Eos delectus tenetur expedita
            sequi!
          </p>
          <div className="seller">
            <h2>About the supplier</h2>
            <div className="user">
              <img src="img/bg.jpg" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>

            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Clara, I enjoy creeating AI generated art in my spare
                time. I have a lot of experience using AI programs and that
                means I know what to promt the AI with to get a great and
                incredible detailed results.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="img/bg.jpg" className="pp" alt="" />
                <div className="info">
                  <span>Johna Dakota</span>
                  <div className="country">
                    <img src="img/en.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>5</span>
              </div>
              <p>
                I just want to say that art with AI was first and after this,
                the only artist ill be using on Atouprix. Communication was
                amazing, ech and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this.
                And know akready that I'll be using it again very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <i className="fa-solid fa-thumbs-up"></i>
                <span>Yes</span>
                <i className="fa-solid fa-thumbs-down"></i>
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="img/bg.jpg" className="pp" alt="" />
                <div className="info">
                  <span>Johna Dakota</span>
                  <div className="country">
                    <img src="img/en.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>5</span>
              </div>
              <p>
                I just want to say that art with AI was first and after this,
                the only artist ill be using on Atouprix. Communication was
                amazing, ech and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this.
                And know akready that I'll be using it again very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <i className="fa-solid fa-thumbs-up"></i>
                <span>Yes</span>
                <i className="fa-solid fa-thumbs-down"></i>
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="img/bg.jpg" className="pp" alt="" />
                <div className="info">
                  <span>Johna Dakota</span>
                  <div className="country">
                    <img src="img/en.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>5</span>
              </div>
              <p>
                I just want to say that art with AI was first and after this,
                the only artist ill be using on Atouprix. Communication was
                amazing, ech and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this.
                And know akready that I'll be using it again very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <i className="fa-solid fa-thumbs-up"></i>
                <span>Yes</span>
                <i className="fa-solid fa-thumbs-down"></i>
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="img/bg.jpg" className="pp" alt="" />
                <div className="info">
                  <span>Johna Dakota</span>
                  <div className="country">
                    <img src="img/en.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>5</span>
              </div>
              <p>
                I just want to say that art with AI was first and after this,
                the only artist ill be using on Atouprix. Communication was
                amazing, ech and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this.
                And know akready that I'll be using it again very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <i className="fa-solid fa-thumbs-up"></i>
                <span>Yes</span>
                <i className="fa-solid fa-thumbs-down"></i>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image:</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create an unique high quality AI image based on the
            description you give to me.
          </p>
          <div className="details">
            <div className="item">
              <i className="fa-solid fa-business-time"></i>
              <span>2 working days delivery</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-comments"></i>
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <i className="fa-solid fa-check"></i>
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-check"></i>
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-check"></i>
              <span>Taylored typing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
