import React from "react";
import { Row, Col, Card, Icon } from "antd";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>¿Cómo funcionan el almacenamiento de datos?</h2>
        <h3>
        Facil acceso a objetos de interes, cada uno de los recursos publicados 
        podran ser visualizados por personas registras o externas al sitio.  
        </h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="clock-circle"
              title="Videos"
              description="Publicacion de videos para reforzar el conocimiento."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="key"
              title="Imagenes"
              description="Ilustraciones para tener una mejor claridad de los temas que se abordan."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="message"
              title="Links"
              description="Links relacionados a los temas a tratar en la publicacion."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="user"
              title="Notas"
              description="Publicaciones redactadas en el momento de la publicacion."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="dollar"
              title="Usuarios"
              description="Acceso para crear publicaciones."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="check-circle"
              title="Modificaciones"
              description="Publicacion, Modificacion y eliminacion de publicaciones."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      <Icon type={icon} />
      <Meta title={title} description={description} />
    </Card>
  );
}
