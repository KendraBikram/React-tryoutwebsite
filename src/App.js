import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Project from './components/Pages/Project';
import Project2 from './components/Pages/Project2';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Footer from './components/Footer/footer';

function App() {
  return (
  <div className="App">
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Project' exact component={Project} />
          <Route path='/Project2' exact component={Project2} />
          <Route path='/About' exact component={About} />
        </Switch>
    </Router>

    <Footer />
    </div>
  );
}

export default App;
