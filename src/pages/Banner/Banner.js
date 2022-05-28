import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../image/banner/banner1.jpg'
import banner2 from '../../image/banner/banner2.jpg'
import banner3 from '../../image/banner/banner3.jpg'

const Banner = () => {
    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Welcome to X-Autos</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Welcome to X-Autos</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Welcome to X-Autos</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;