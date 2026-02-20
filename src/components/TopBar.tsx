import { Container, Nav, Navbar } from "react-bootstrap"

function TopBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        {/* Mobile only: Toggle */}
        <Navbar.Toggle
          aria-controls="main-nav"
          className="d-lg-none"
        />

        {/* Logo: centered on mobile, left on desktop */}
        <Navbar.Brand
          href="#home"
          className="mx-auto ms-lg-0 me-lg-auto"
        >
          <img
            src="src/assets/logos/music.svg"
            alt="apple music logo"
            className="white-logo pb-2"
          />
        </Navbar.Brand>

        {/* Mobile only: Accedi always visible */}
        <Nav className="d-lg-none">
          <Nav.Link className="text-danger">Accedi</Nav.Link>
        </Nav>

        {/* Desktop collapse: nav items + accedi */}
        <Navbar.Collapse id="main-nav">
          {/* Mobile menu items (inside collapse) */}
          <Nav className="d-lg-none pt-3">
            <Nav.Link className="text-danger">item 1</Nav.Link>
            <Nav.Link className="text-danger">item 2</Nav.Link>
          </Nav>

          {/* Desktop right side */}
          <Nav className="ms-auto d-none d-lg-flex align-items-center">
            <Nav.Link className="text-danger">Accedi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopBar
