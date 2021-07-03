import {Navbar,Nav} from 'react-bootstrap/'
const Navba = () => {

return(
  <div className="NavBar">
   <Navbar bg="light" expand="lg">
   <Navbar.Brand href="/"><div className="logo"><i className="fas fa-utensils"><span> Food</span>|Cort</i></div></Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ml-auto nav-right NavLinks">
       <Nav.Link href="/">Home</Nav.Link>
       <Nav.Link href="/Dashboard">Food</Nav.Link>
       <Nav.Link href="/Login">Login</Nav.Link>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
</div>
     
);

};

export default Navba;





