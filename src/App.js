import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import NavBar from "./components/layout/NavBar";
// Pages
import HomePage from "./pages/HomePage";
import TutoriasPage from "./pages/TutoriasPage";
import TutoriasPersonalizadas from "./pages/TutoriasPersonalizadas";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
// MUI Imports
import "./App.css";
import themeFile from "./util/theme";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Profile from "./pages/Profile";

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tutorias" component={TutoriasPage} />
                <Route exact path="/personalizadas" component={TutoriasPersonalizadas} />
                <Route exact path="/profile" component={Profile} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
