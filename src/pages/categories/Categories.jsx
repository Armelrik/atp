import React from 'react'
import { useState } from 'react'
import './Categories.scss'
import { cats } from '../../Data'
import CatCard from '../../components/catCard/CatCard'

const Categories = () => {

  const [open,setOpen] = useState(false)
  const [sort,setSort] = useState("sales")

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='categories'>
      <div className="container">
        <span className="breadcrumbs">ATOUTPRIX - GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Earum cum optio ex harum veniam autem quibusdam excepturi.
        </p>

        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min...' />
            <input type="text" placeholder='max...' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy: </span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest" }</span>
            <i className="fa-solid fa-angle-down" onClick={()=>setOpen(!open)}></i>
            {open &&
              <div className="rightMenu active">
                {sort === "sales" ? 
                  (<span onClick={()=>reSort("createdAt")}>Newest</span>) :
                  (<span onClick={()=>reSort("sales")}>Best Selling</span>)
                }
              </div>
            }
          </div>
        </div>

        <div className="cards">
          {cats.map(cat=> (
            <CatCard key={cat.id} item={cat} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Categories