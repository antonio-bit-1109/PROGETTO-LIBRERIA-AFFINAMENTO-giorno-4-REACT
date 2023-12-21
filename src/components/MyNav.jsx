import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNav = (props) => {
    return (
        <Navbar expand="lg" className="bg-body-primary text-dark bg-primary">
            <Container fluid>
                <Navbar.Brand href="#home">🐸 React-Bootstrap 🦍</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="text-center fw-bold" href="#">
                            {props.home}
                        </Nav.Link>
                        <Nav.Link className="text-center fw-bold" href="#">
                            {props.about}
                        </Nav.Link>
                        <Nav.Link className="text-center fw-bold" href="#">
                            {props.browse}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;
