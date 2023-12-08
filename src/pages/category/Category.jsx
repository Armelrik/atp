// import React from 'react'
import Slider from "react-slick"
import "./Category.scss"

const Category = () => {
  return (
    <div className='category'>
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">ATOUTPRIX - GRAPHICS & DESIGN -</span>
          <h1>AI will generate an Art for you</h1>
          <div className="user">
            <img src="img/bg.jpg" alt="" />
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

        <Slider slidesToShow={1} slidesToScroll={1} dots arrows>
          <img src="img/pexels1.jpg" alt="" />
          <img src="img/pexels2.jpg" alt="" />
          <img src="img/pexels3.jpg" alt="" />
        </Slider>

        <h2>About this category</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consectetur, labore quas eveniet architecto repellat delectus
          at praesentium quaerat vitae itaque aliquid autem quod veritatis
          voluptas dolores asperiores numquam ex dolore fuga eos iusto, 
          nobis cum. Eos delectus tenetur expedita sequi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consectetur, labore quas eveniet architecto repellat delectus
          at praesentium quaerat vitae itaque aliquid autem quod veritatis
          voluptas dolores asperiores numquam ex dolore fuga eos iusto, 
          nobis cum. Eos delectus tenetur expedita sequi!</p>

        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Category