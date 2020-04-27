import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Carousel from 'Components/Carousel';
import ImgLoading from 'Components/ImgLoading';

const ProductImages = ({ images }) => {
  return (
    <div>
      <Row className="d-md-none">
        <Col>
          <Carousel items={images} />
        </Col>
      </Row>
      <Row className="d-none d-md-flex">
        {images.map((image, i) => (
          <Col xs="12" md="6" key={image.imageId}>
            <ImgLoading className="img-fluid" src={images[i].imageSrc} alt="" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

ProductImages.propTypes = {
  images: PropTypes.array,
};

export default ProductImages;
