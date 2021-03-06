import React from "react";
import './ProductList.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductCard from '../ProductCard/ProductCard'

// As a functional component it receives through props the list of the content to be rendered
function ProductsList(props) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  if (props.contentList.length !== 0) {
    return (
      <div className='mb-5'>
        <div className='d-flex-block text-center'>
          <h4 className='text-secondary'>{props.listTitle}</h4>
        </div>
        <Carousel
          renderButtonGroupOutside={true}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {props.contentList.map((product) => {
          return (<div key={product._id} style={{padding: "10px"}}><ProductCard product={product}/></div>)})}
        </Carousel>
      </div>
    );
  } else {
    return null;
  }
}

export default ProductsList;

