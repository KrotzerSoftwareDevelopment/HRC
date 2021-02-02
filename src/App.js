import  React, {useState} from 'react';
import './App.css';
import logo from './navlogo.png';
// import { useSelector, useDispatch } from 'react-redux';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import PuppyPage from './pages/PuppyPage.jsx';
import OrdersHome from './pages/CartPage';
import AboutPage from './pages/About/AboutPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import HomePage from './pages/HomePage.jsx';
import DepositPage from './pages/DepositPage.jsx';
import PuppiesPage from './pages/PuppiesPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ShippingPage from './pages/ShippingPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import { BrowserRouter as  Router, Route, Link, NavLink } from 'react-router-dom';
import ContactPage from './pages/ContactPage.jsx';
import ReservationsAdmin from './pages/ReservationsAdmin.jsx';
import SigninPage from './pages/SigninPage.jsx';
import AboutCairnCare from './pages/About/CairnCare.jsx';
import AboutDiet from './pages/About/AboutDiet.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
// import PuppiesAdmin from './pages/PuppiesAdmin';
import AboutHomeRaised from './pages/About/AboutHomeRaised.jsx';
import Reservations from './pages/ReservationsPage.jsx';
import { signout } from './actions/userActions';
import PuppiesAvailable from './pages/PuppiesAvailable.jsx';

const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/puppies', name: 'Puppies', Component: PuppiesPage },
  { path: '/products', name: 'Products', Component: ProductsPage },
  { path: '/GalleryPage', name: 'Gallery', Component: GalleryPage },
  { path: '/AboutPage', name: 'About', Component: AboutPage },
  { path: '/Contact', name: 'Contact', Component: ContactPage },
]

const App = () => {
  const [expanded, setExpanded] = useState(false);
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;
  // const dispatch = useDispatch();
  // const signoutHandler = () => {
  //   dispatch(signout());
  // };
return (
  <div id="NaviBarStyle"> 
    <div>
  <Navbar  fixed="top" collapseOnSelect expand="lg"expanded={expanded} bg="light" variant="light">
  <Navbar.Brand ><Link to="/"><img src={logo} /> </Link></Navbar.Brand>
  <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto"  >
          {routes.map(route => (
            <Nav.Link
              onClick={() => setExpanded(false)}
              key={route.path}
              as={NavLink}
              to={route.path}
              activeClassName="active"
              exact
            >
              {route.name}
            </Nav.Link>
          ))} 
        </Nav>
  {/* <Nav>

  <NavDropdown.Divider />
  
  {userInfo ? (  <div>
    {userInfo && userInfo.isAdmin ? (
              <NavDropdown title="Admin" id="collasible-nav-dropdown" className="rightSideNavi">
                    <Link to="/ProfilePage" onClick={() => setExpanded(false)}>{userInfo.name}'s Profile</Link>
                    <NavDropdown.Divider />
                    <Link to="/PuppiesAdmin" onClick={() => setExpanded(false)} id="dropDownStyle"> Puppies </Link>
                    <NavDropdown.Divider />
                    <Link to="/reservations" onClick={() => setExpanded(false)} id="dropDownStyle"> Reservations </Link>
                    <NavDropdown.Divider />
                    <Link to="#" onClick={() => setExpanded(false)} id="dropDownStyle"> App Images </Link>
                    <NavDropdown.Divider />
                    <Link to="#" onClick={() => setExpanded(false)} id="dropDownStyle"> Puppy merchandise </Link>
                    <NavDropdown.Divider />
                    <div onClick={() => setExpanded(false)}>
                    <Link to="#signout" onClick={signoutHandler} >
          Sign Out
        </Link>
        </div>
         
             </NavDropdown>
  ) : (
    <div>
      <NavDropdown title="Account" id="collasible-nav-dropdown" className="rightSideNavi">
      <div id="dropDownStyle">
  <Link to="/ProfilePage" onClick={() => setExpanded(false)}>{userInfo.name}'s Profile</Link>
  </div>
  <NavDropdown.Divider />
              <Link to="#signout" onClick={signoutHandler} id="dropDownStyle">
                <div >
          Sign Out
          </div>
        </Link>
        </NavDropdown>
    </div>
            )}
            </div>
                ) : (
    
    
    
                  <Link to="/SigninPage" onClick={() => setExpanded(false)}>Sign In / Register</Link>
                )}

  </Nav> */}
                  <Link to="/OrderMenu" onClick={() => setExpanded(false)} activeClassName="active"> Orders </Link>
</Navbar.Collapse>
</Navbar>
<div className="containertwo">
<Container className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                unmountOnExit
              >
                  <Component />
              </CSSTransition>
            )}
          </Route>
        ))}
      </Container>
      </div>
</div>
<Route path="/OrderMenu" component={OrdersHome} />
{/* 
<Route path="/PuppiesAvailable" component={PuppiesAvailable} />
<Route path="/ReservationsAdmin" component={ReservationsAdmin} />
<Route path="/puppy/:id" component={PuppyPage} />
<Route path="/ProfilePage" component={ProfilePage} />
<Route path="/About/AboutDiet" component={AboutDiet} />
<Route path="/About/AboutHomeRaised" component={AboutHomeRaised} />
<Route path="/ShippingPage" component={ShippingPage} />
<Route path="/About/AboutCairnCare" component={AboutCairnCare} />
<Route path="/signin" component={SigninPage} />
<Route path="/deposit/:id?" component={DepositPage} />
<Route path="/PaymentPage" component={PaymentPage} />
<Route path="/reservations" component={Reservations} />
<Route path="/register" component={RegisterPage} /> */}

</div>
  );
}

export default App;
