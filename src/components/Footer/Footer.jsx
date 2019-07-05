import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <Container>
          <Row>
            <Col md='3'>
              <h1 className='title'>FFR•</h1>
            </Col>
            <Col md='3'>
              <Nav>
                <NavItem>
                  <NavLink to='/' tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/profile-page' tag={Link}>
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md='3'>
              <Nav>
                <NavItem>
                  <NavLink href='https://www.linkedin.com/in/fabricio-fraga-868018132/'>
                    Contact Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='https://opensource.org/licenses/MIT'>License</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md='3'>
              <h3 className='title'>Fabricio Rezende</h3>
              <h4 className='title'>fabriciofraga15@gmail.com</h4>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
