import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
  // Components
  import Layout from "./components/_shared/Layout";
  import Home from "./pages/Home";
  import Gallery from "./pages/Gallery";
  
  const Routes = () => {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  };
  
  export default Routes;
  