import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/avatar-persona.jpg";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Registrate para comenzar a formar parte de este sitio y ayudar
            a mejorar el aprendizaje de alguien mas de forma segura y amena.
          </h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Grupo ATICO34"
                subtitle="Almacenamiento de datos y Dispositivos Data storage"
                avatar={AvatarPersona}
                review="Proceso a través del cual se graba la información que manejamos o manejan los sistemas en el día a día. Esta información se puede grabar en soportes ópticos o electromagnéticos, para después seguir siendo accesible. Es decir, los datos son almacenados en dispositivos de almacenamiento o data storage."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Microsoft"
                subtitle="Almacenamiento de datos"
                avatar={AvatarPersona}
                review="Un almacenamiento de datos es un repositorio centralizado de datos integrados procedentes de uno o varios orígenes dispares. Los almacenamientos de datos almacenan datos históricos y actuales, y se utilizan para realizar informes y análisis de los datos."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Drive"
                subtitle="Google Drive"
                avatar={AvatarPersona}
                review="El usuario puede gestionar, desde cualquier dispositivo, sus documentos y datos almacenados en la nube a través de Google Drive ingresando a su casilla de correo en la que puede visualizar el paquete de aplicaciones de Google.Almacenar cualquier tipo de archivo, como fotos, videos, archivos de presentación, planillas, entre otros."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
