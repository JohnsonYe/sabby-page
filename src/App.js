import React, {Component} from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Routes from './components/Routes';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import FooterConnection from './components/footerConnection';
import './style/default.css';

class App extends Component {
  // componentDidUpdate(prevProps) {
  //     if (this.props.location.pathname !== prevProps.location.pathname) {
  //         console.log('Route change!');
  //     }
  // }
  render() {
    return (
      <Router>
        <NavBar />
        <Routes />
        <FooterConnection />
        <Footer />
      </Router>
    )
  }
}

export default App;
// export default withRouter(props => <App {...props}/>);