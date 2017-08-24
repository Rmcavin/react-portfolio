import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../resources/font-awesome-4.7.0/css/font-awesome.css';
import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import Skills from './Skills';
import ProjectContainer from './ProjectContainer';
import Footer from './Footer';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <NavBar />
              <Route exact path = "/" component={About} />
              <Route path = "/skills" component= {Skills} />
              <Route path = "/projects" component= {ProjectContainer} />
              <Footer />
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
