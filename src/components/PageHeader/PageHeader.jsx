import React from 'react';

// reactstrap components
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from 'reactstrap';
class PageHeader extends React.Component {
  render() {
    return (
      <div className='page-header header-filter'>
        <div className='squares square1' />
        <div className='squares square2' />
        <div className='squares square3' />
        <div className='squares square4' />
        <div className='squares square5' />
        <div className='squares square6' />
        <div className='squares square7' />
        <Container>
          <div className='content-center brand'>
            <h1 className='h1-seo'>Fabricio Rezende</h1>
            <h3 className='d-none d-sm-block'>Web Developer @ FullStack JavaScript</h3>
            <Col sm='12'>
              {/* <Link to='profile-page'>
                <img
                  alt='...'
                  className='img-raised'
                  src={require('assets/img/profile-page.png')}
                />
              </Link> */}
              <Button className='btn-simple btn-round' color='primary' to='profile-page' tag={Link}>
                View Profile Page
              </Button>
            </Col>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
