import React from 'react';
import classnames from 'classnames';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
// reactstrap components
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

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.jsx';
import Footer from 'components/Footer/Footer.jsx';

const carouselItems = [
  {
    src: require('assets/img/denys.jpg'),
    altText: 'Slide 1',
    caption: 'Big City Life, United States'
  },
  {
    src: require('assets/img/fabien-bazanegue.jpg'),
    altText: 'Slide 2',
    caption: 'Somewhere Beyond, United States'
  },
  {
    src: require('assets/img/mark-finn.jpg'),
    altText: 'Slide 3',
    caption: 'Stocks, United States'
  }
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle('profile-page');
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      // ps.destroy();
      document.documentElement.className += ' perfect-scrollbar-off';
      document.documentElement.classList.remove('perfect-scrollbar-on');
    }
    document.body.classList.toggle('profile-page');
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div>
        <ExamplesNavbar />
        <div className='wrapper'>
          <div className='page-header'>
            <img alt='...' className='dots' src={require('assets/img/dots.png')} />
            <img alt='...' className='path' src={require('assets/img/path4.png')} />
            <Container className='align-items-center'>
              <Row>
                <Col lg='6' md='6'>
                  <h1 className='profile-title text-left'>Fabicio Rezende</h1>
                  <h5 className='text-on-back'>01</h5>
                  <p className='profile-description'>
                    Experience as a Computer Engineer working on how to develop FullStack brings me
                    the possibility of critical analysis of different scenarios and the search for
                    optimal solutions. I have experience with frontend technologies such as:
                    JavaScript / TypeScript (AngularJs / CLI and React / Redux). My experience in
                    backend passes from Node.Js as well as Java Spring / Hibernate and C # .Net Core
                    / Entity. I have experience in DevOps CI / CD with Jenkins and Trevis.
                    Infrastructure in Docker / Kubernetes.
                  </p>
                </Col>
                <Col className='ml-auto mr-auto' lg='4' md='6'>
                  <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid rounded-circle'
                        src={require('assets/img/ffrezende.jpg')}
                      />
                      <h4 className='title'>Skills</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav className='nav-tabs-primary justify-content-center' tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, 'tabs', 1)}
                            href='#pablo'
                          >
                            FullStack
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, 'tabs', 2)}
                            href='#pablo'
                          >
                            DevOps
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent className='tab-subcategories' activeTab={'tab' + this.state.tabs}>
                        <TabPane tabId='tab1'>
                          <Row>
                            <Col sm='9'>
                              <p className='profile-description'>Descriptions @@@@@@@@@@@@@@</p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId='tab2'>
                          <Row>
                            <Col sm='9'>
                              <p className='profile-description'>Descriptions @@@@@@@@@@@@@@</p>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* <div className='section'>
            <Container>
              <Row className='justify-content-between'>
                <Col md='6'>
                  <Row className='justify-content-between align-items-center'>
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md='5'>
                  <h1 className='profile-title text-left'>Projects</h1>
                  <h5 className='text-on-back'>02</h5>
                  <p className='profile-description text-left'>
                    An artist of considerable range, Ryan — the name taken by Melbourne-raised,
                    Brooklyn-based Nick Murphy — writes, performs and records all of his own music,
                    giving it a warm, intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <div className='btn-wrapper pt-3'>
                    <Button
                      className='btn-simple'
                      color='primary'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      <i className='tim-icons icon-book-bookmark' /> Bookmark
                    </Button>
                    <Button
                      className='btn-simple'
                      color='info'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      <i className='tim-icons icon-bulb-63' /> Check it!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div> */}
          <section className='section'>
            <Container>
              <Row>
                {/* <Col md='6'>
                  <Card className='card-plain'>
                    <CardHeader>
                      <h1 className='profile-title text-left'>Contact</h1>
                      <h5 className='text-on-back'>03</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md='6'>
                            <FormGroup>
                              <label>Your Name</label>
                              <Input defaultValue='Mike' type='text' />
                            </FormGroup>
                          </Col>
                          <Col md='6'>
                            <FormGroup>
                              <label>Email address</label>
                              <Input placeholder='mike@email.com' type='email' />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md='6'>
                            <FormGroup>
                              <label>Phone</label>
                              <Input defaultValue='001-12321345' type='text' />
                            </FormGroup>
                          </Col>
                          <Col md='6'>
                            <FormGroup>
                              <label>Company</label>
                              <Input defaultValue='CreativeTim' type='text' />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md='12'>
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder='Hello there!' type='text' />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className='btn-round float-right'
                          color='primary'
                          data-placement='right'
                          id='tooltip341148792'
                          type='button'
                        >
                          Send text
                        </Button>
                        <UncontrolledTooltip delay={0} placement='right' target='tooltip341148792'>
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col> */}
                <Col className='ml-auto' md='4'>
                  <div className='info info-horizontal'>
                    <div className='icon icon-primary'>
                      <i className='tim-icons icon-square-pin' />
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Find me</h4>
                      <p>
                        Belo Horizonte, <br />
                        Brasil
                      </p>
                    </div>
                  </div>
                  <div className='info info-horizontal'>
                    <div className='icon icon-primary'>
                      <i className='tim-icons icon-mobile' />
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Give me a ring</h4>
                      <p>
                        Fabricio <br />
                        +55 9 9135 4455 <br />
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
