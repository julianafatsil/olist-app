import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';


const CardMap = () => {
  return (
    <Col className="card-step card-step-white" sm={12} md={6}>      
      <img src="http://maps.googleapis.com/maps/api/staticmap?center=LAT, LONG&zoom=11&size=250x250" />
    </Col>
  );
}

export default CardMap;

// function inicializar() {
//   var coordenadas = {lat: -22.912869, lng: -43.228963};

//   var mapa = new google.maps.Map(document.getElementById('mapa'), {
//     zoom: 15,
//     center: coordenadas 
//   });

//   var marker = new google.maps.Marker({
//     position: coordenadas,
//     map: mapa,
//     title: 'Meu marcador'
//   });
// }
