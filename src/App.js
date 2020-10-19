import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Video from './components/video/Video';
import routesConfig from './routesConfig';
import Siderbar from './components/siderbar/Siderbar'

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <Link to="/" >Home / </Link>
          <Link to="/user" >User</Link> 
          <Link to="/siderbar" > / Siderbar</Link>
          <Link to="/video" > / Vídeo </Link>
        </div>
       
        {routesConfig.map((value, key) => {
          return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}
          ></Route>
        })}
      </div>
    );
  }
}

export default App;