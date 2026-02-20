import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">CU Fest 2026</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Events</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}