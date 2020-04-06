import React from "react";
import Home from "./pages/home";
import DetailPage from "./pages/detail-page";
import Footer from "./components/footer";
import SearchPage from "./pages/search-page";
import { Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
