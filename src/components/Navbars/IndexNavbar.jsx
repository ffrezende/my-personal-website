import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap';

import NavBarProfileContat from './NavInfoProfile';

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: 'navbar-transparent'
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeColor);
  }
  changeColor = () => {
    if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
      this.setState({
        color: 'bg-info'
      });
    } else if (document.documentElement.scrollTop < 100 || document.body.scrollTop < 100) {
      this.setState({
        color: 'navbar-transparent'
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle('nav-open');
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: 'collapsing-out'
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ''
    });
  };
  scrollToDownload = () => {
    document.getElementById('download-section').scrollIntoView({ behavior: 'smooth' });
  };
  render() {
    return (
      <Navbar className={'fixed-top ' + this.state.color} color-on-scroll='100' expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand data-placement='bottom' to='/' rel='noopener noreferrer' tag={Link}>
              <span>FFR• </span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className='navbar-toggler navbar-toggler'
              onClick={this.toggleCollapse}
            >
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          <Collapse
            className={'justify-content-end ' + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className='navbar-collapse-header'>
              <Row>
                <Col className='collapse-brand' xs='6'>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    FFR•
                  </a>
                </Col>
                <Col className='collapse-close text-right' xs='6'>
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className='navbar-toggler'
                    onClick={this.toggleCollapse}
                  >
                    <i className='tim-icons icon-simple-remove' />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className='p-0'>
                <NavLink
                  data-placement='bottom'
                  href='https://github.com/ffrezende'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='Follow me on GitHub'
                >
                  <i className='fab fa-github' />
                  <p className='d-lg-none d-xl-none'>GitHub</p>
                </NavLink>
              </NavItem>
              <NavItem className='p-0'>
                <NavLink
                  data-placement='bottom'
                  href='https://www.linkedin.com/in/fabricio-fraga-868018132/'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='See my profile on Linkedin'
                >
                  <i className='fab fa-linkedin' />
                  <p className='d-lg-none d-xl-none'>Linkedin</p>
                </NavLink>
              </NavItem>
              <NavItem className='p-0'>
                <NavLink
                  data-placement='bottom'
                  href='https://www.instagram.com/fragafabricio/'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='Follow me on Instagram'
                >
                  <i className='fab fa-instagram' />
                  <p className='d-lg-none d-xl-none'>Instagram</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color='default'
                  data-toggle='dropdown'
                  href='#pablo'
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className='fa fa-cogs d-lg-none d-xl-none' />
                  About me
                </DropdownToggle>
                <DropdownMenu className='dropdown-with-icons'>
                  {/* <DropdownItem href='https://demos.creative-tim.com/blk-design-system-react/#/documentation/tutorial'>
                    <i className='tim-icons icon-paper' />
                    Documentation
                  </DropdownItem> */}
                  {/* <DropdownItem tag={Link} to='/register-page'>
                    <i className='tim-icons icon-bullet-list-67' />
                    Register Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to='/landing-page'>
                    <i className='tim-icons icon-image-02' />
                    Landing Page
                  </DropdownItem> */}
                  <DropdownItem tag={Link} to='/profile-page'>
                    <i className='tim-icons icon-single-02' />
                    Profile Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
