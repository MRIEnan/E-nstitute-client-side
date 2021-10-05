import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Admission from './components/Admission/Admission';
import useCourses from './Utilities/MyCourses';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  useCourses();
  return (
    <div className="lg:container mx-auto">
      <Router>
      <Navigation></Navigation>
      <div>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/admission">
            <Admission></Admission>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
      </Router>
    </div>
  );
}

export default App;
