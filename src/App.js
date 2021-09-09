import classes from './App.module.css';
import Home from './components/Home';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Setup React Router

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
