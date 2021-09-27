import { Layout, Space, Typography } from "antd";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Exchanges,
  Homepage,
  Crypto,
  News,
  Cryptodetails,
} from "./components";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/crypto">
                <Crypto />
              </Route>
              <Route path="/cryptodetails/:coinId">
                <Cryptodetails />
              </Route>
              <Route path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            style={{ color: "white", textAlign: "center" }}
            level={5}
          >
            CryptoHub All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/excahnges">Excahnges</Link>
            <Link to="/News">News</Link>
            <Link to="/crypto">Cryptocurrency</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
