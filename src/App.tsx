import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";

const HomeComponent = loadable(() =>
  import(/* webpackChunkName: "home" */ "./views/Home")
);
const AboutComponent = loadable(() =>
  import(/* webpackChunkName: "about" */ "./views/About")
);
const BlogComponent = loadable(() =>
  import(/* webpackChunkName: "blog" */ "./views/Blog")
);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <div className="slice-group">
            <h1>Hi I'm Yu Hui</h1>
            <p>
              <strong>Front End Development</strong> | Technical Writer
            </p>
            <Router>
              <ul className="group-list">
                <li>
                  <a href="https://github.com/alvinmi">GITHUB</a>
                </li>

                <li>
                  <Link to="/blog">BLOG</Link>
                </li>
                <li>
                  <a href="https://www.instagram.com/alvinmi0620/">INSTAGRAM</a>
                </li>
                <li>
                  <a href="https://twitter.com/mr_yuhui">TWITTER</a>
                </li>
                <li>
                  <a href="https://weibo.com/u/5703864435/">Weibo</a>
                </li>
                <li>
                  <a href="mailto:alvin.mi0620@gmail.com">EMAIL</a>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">To Home</Link>
                </li>
              </ul>
              {/* <Route exact path="/" component={HomeComponent}></Route> */}
              {/* <Route path="/about" component={AboutComponent}></Route> */}
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
