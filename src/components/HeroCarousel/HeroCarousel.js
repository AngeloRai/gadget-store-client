import { Carousel } from "react-bootstrap";
import './HeroCarousel.css'


import carousel1 from '../../images/carousel1.png'
import carousel2 from '../../images/carousel2.png'
import carousel3 from '../../images/carousel3.png'
import carousel4 from '../../images/carousel4.png'
import carousel5 from '../../images/carousel5.png'



function HeroCarousel(props) {

  return (

    <Carousel className='mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel4}
          alt="Forth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel5}
          alt="Fifth slide"
        />
      </Carousel.Item>

    </Carousel>)

}

export default HeroCarousel