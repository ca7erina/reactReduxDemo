import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import React from 'react';
import './style/main.css';
import favicon from './assets/favicon.ico';
import App from './components/reduxDemo/App';
import ReactTableDemo from './components/ReactTableDemo';

const icon1 = document.getElementById('icon1');
icon1.src = favicon;

const RouterExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/ReduxDemo">ReduxDemo</Link></li>
        <li><Link to="/reactTableDemo">ReactTableDemo</Link></li>
      </ul>
      <hr />
      <Route path="/ReduxDemo" component={App} />
      <Route path="/reactTableDemo" component={ReactTableDemo} />
    </div>
  </Router>
);

export default RouterExample;
