import React from 'react'
import Featured from "../../components/featured/Featured"
import "./Home.scss"
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import CatsCard from '../../components/catsCard/CatsCard'
import { cards, projects } from '../../Data'
import ProjectCard from '../../components/projectCard/ProjectCard'


const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        { cards.map(card => (
            <CatsCard item={card} key={card.id} />
          ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of office appliance at your fingertips</h1>
            <div className="title">
              <i className="fa-solid fa-circle-info"></i>
              The best for every budget
            </div>
            <p>
              Find high-quality products at every price point. 
              No overpricing, just the best price for value.
            </p>
            <div className="title">
              <i className="fa-solid fa-bookmark"></i>
              The best for every budget
            </div>
            <p>
              Find high-quality products at every price point. 
              No overpricing, just the best price for value.
            </p>
            <div className="title">
              <i className="fa-solid fa-globe"></i>
              The best for every budget
            </div>
            <p>
              Find high-quality products at every price point. 
              No overpricing, just the best price for value.
            </p>

          </div>

          <div className="item">
            <video src="img/share.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Atoutprix Business</h1>
            <h1>A business solution for enterprises</h1>
            <p>
              Upgrade to a curated experience of appliances and benefits,
              at the best market price
            </p>
            <div className="title">
              <i className="fa-solid fa-check"></i>
              Connect to suppliers with proven experience and quality
            </div>
            <div className="title">
              <i className="fa-solid fa-check"></i>
              Get matched with the best product at the best price
            </div>
            <div className="title">
              <i className="fa-solid fa-check"></i>
              Manage your orders with your supplier in real time
            </div>
            <button>Explore Atoutprix Business</button>
            
          </div>
          <div className="item">
              <img src="img/ban-defil-2-1024x293.jpg" alt="" />
            </div>
        </div>
      </div>

      <Slide slidesToShow={3} arrowsScroll={3}>
        { projects.map(card => (
            <ProjectCard item={card} key={card.id} />
          ))}
      </Slide>

    </div>
  )
}

export default Home