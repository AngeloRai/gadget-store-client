import { Carousel } from "react-bootstrap";
import './HeroCarousel.css'
import {Link} from 'react-router-dom'


import carousel1 from '../../images/carousel1.png'
import carousel2 from '../../images/carousel2.png'
import carousel3 from '../../images/carousel3.png'
import carousel4 from '../../images/carousel4.png'
import carousel5 from '../../images/carousel5.png'



function HeroCarousel(props) {

  return (

    <Carousel>
      <Carousel.Item>
        <Link to="/iphone">
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/watch">
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="acessories">
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/ipad">
          <img
            className="d-block w-100"
            src={carousel4}
            alt="Forth slide"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/all-products">
          <img
            className="d-block w-100"
            src={carousel5}
            alt="Fifth slide"
          />
        </Link>
      </Carousel.Item>

    </Carousel>)

}

export default HeroCarousel