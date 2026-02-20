import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TopBar from "./components/TopBar"
import { Container, Row, Col } from "react-bootstrap"
import HeroCarousel from "./components/HeroCarousel"
import RadioStations from "./components/RadioStations"
import TracksList from "./components/TracksList"
import ExploreSection from "./components/ExploreSection"
import Footer from "./components/Footer"
import MusicPlayer from "./components/MusicPlayer"
//import Sidebar from "./components/SideBar"

//const albumURL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${albumID}`

function App() {
  return (
    <Container
      fluid
      className="h-100 p-0 overflow-scroll"
    >
      <Row className="flex-nowrap">
        {/*  <Col
          md={2}
          className="p-0"
        >
          <Sidebar />
        </Col> */}
        <Col
          /* md={10} */
          className="d-flex flex-column p-0"
        >
          <TopBar />
          <Container>
            <HeroCarousel />
            <RadioStations />
            <TracksList />
            <ExploreSection />
          </Container>
          <Footer />
        </Col>
      </Row>
      <MusicPlayer />
    </Container>
  )
}

export default App
