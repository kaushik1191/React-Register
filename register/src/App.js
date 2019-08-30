import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/shared/Header/header.component';
import Footer from './components/shared/Footer/footer.component';
import Dashboard from './components/Dashboard/dashboard.component';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/About/aboutus.component';
import Team from './components/Team/team.component';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Aboutroute}/>
          <Route path="/our-team" component={Ourteam} />
        </Router>
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

function Home() {
  return (
    <Dashboard />
  );
}

function Aboutroute() {
  return (
    <About />
  );
}

function Ourteam() {
  return (
    <Team />
  );
}
export default App;
