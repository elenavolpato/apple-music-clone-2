import { Container } from "react-bootstrap"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container
      fluid
      className="bg-body-tertiary p-md-5 p-4"
    >
      <Container className="ps-md-5 my-3">
        <p className="fw-bolder">
          Italia | <span className="text-white-50">English(UK)</span>
        </p>
        <p>Copyright © {currentYear} Apple Inc. Tutti i diritti riservati.</p>
        <div>
          <a
            className="text-white text-decoration-none fw-bold"
            href="#"
          >
            Condizioni dei servizi internet&nbsp;
            <span className="text-white-50 fw-bold">
              &nbsp;&nbsp;|&nbsp;&nbsp;
            </span>
          </a>{" "}
          <a
            className="text-white text-decoration-none fw-bolder"
            href="#"
          >
            Apple Music e privacy{" "}
          </a>
          &nbsp;
          <span className="text-white-50 fw-bold">
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </span>
          <a
            className="text-white text-decoration-none fw-bolder"
            href="#"
          >
            Avviso sui cookie{" "}
          </a>{" "}
          &nbsp;
          <span className="text-white-50 fw-bold">
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </span>
          <a
            className="text-white text-decoration-none fw-bolder"
            href="#"
          >
            Supporto{" "}
          </a>
          &nbsp;
          <span className="text-white-50 fw-bold">
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </span>
          <a
            className="text-white text-decoration-none fw-bolder"
            href="#"
          >
            Feedback
          </a>
        </div>
      </Container>
    </Container>
  )
}

export default Footer
