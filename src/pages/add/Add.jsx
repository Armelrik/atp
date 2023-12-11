// import React from 'react';
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add new Product</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="text">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I really like"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
              <option value="3d">3D</option>
              <option value="diy">DIY</option>
            </select>

            <label htmlFor="">Cover image</label>
            <input type="file" />
            <label htmlFor="">Upload image</label>
            <input type="file" multiple />
            <label htmlFor="">description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief description to introduce product to customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service title</label>
            <input type="text" placeholder="e.g. One page web design" />
            <label htmlFor="">Short description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Short description of your product"></textarea>
            <label htmlFor="">Delivery time (e.g. 3 days)</label>
            <input type="text" placeholder="estimated delivery time" />
            <label htmlFor="">Revision number</label>
            <input type="number" min={1}/>
            <label htmlFor="">Add features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. set up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Price</label>
            <input type="number" min={1}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
