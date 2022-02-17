import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Sitios Web relacionados e interes</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title="Google Drive"
              subtitle="Almacenamiento gratis Google"
              link="https://www.google.com.mx/intl/es/drive/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="Google Classroom"
              subtitle="Registro de clases via online"
              link="https://classroom.google.com/h?hl=es"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title="Dropbox"
              subtitle="Planes adecuados para cada usuario"
              link="https://www.dropbox.com/es/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={wordPress}
              title="OneDrive"
              subtitle="Almacenamiento Microsoft"
              link="https://www.microsoft.com/es-mx/microsoft-365/onedrive/online-cloud-storage"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Explorar</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
