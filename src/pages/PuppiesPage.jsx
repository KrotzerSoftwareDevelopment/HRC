import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import { useSelector, useDispatch } from 'react-redux';

import { Nav, Col, Row, Tab } from 'react-bootstrap';
// import { If, Then, ElseIf} from 'react-if-elseif-else-render';
// import ReservationsPage from './ReservationsPage';
// import Reserved from './puppycomponents/Reservations';
import PendingAdoption from './PuppiesPending';
import Available from './PuppiesAvailable';
import PuppiesHome from './PuppiesHome';
import Adopted from './PuppiesAdopted';
import Reservations from './PuppiesReserved';
// import PuppiesComponent from './puppycomponents/PuppiesComponent';
import Spinner from 'react-bootstrap/Spinner'

const PuppiesPage = (props) => {
  return(
    <div className="PageContainer">
{/* <div className="PageBody"> */}
<h1>Puppies</h1>
{/* <div>Puppies Available =  </div>
  {puppyAvailable}
  <br />
  ---------
  <br/>
  <div> {puppies.length} </div>  */}
    <div className=""> 
    <div className=""> 
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <div className="PuppiesNavi">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"> Puppy Cost </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"> Available For Adoption </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"> Pending Adoption </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth"> Previously Adopted </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth"> Current Reservations </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </Col>
    <Col sm={9}>
      <Tab.Content>
      <Tab.Pane eventKey="first">
        <PuppiesHome />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Available />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <PendingAdoption />
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <Adopted />
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
          <Reservations />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    </div>
    </div>
    </div>
  )
}
export default PuppiesPage;