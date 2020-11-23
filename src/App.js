import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import './style/default.css';

class App extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    )
  }
}

export default App;
